"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const { status, data } = useSession();
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleLoginClick = () => signIn();

  const handleLogoutClick = () => {
    setMenuIsOpen(false);
    signOut();
  };

  const handleMenuClick = () => setMenuIsOpen(!menuIsOpen);

  return (
    <div className="container mx-auto p-6 py-0 h-24 bg-branco flex items-center justify-between lg:border-b lg:border-cinza-claro">
      <Link href="/">
        <h2 className="hover:text-roxo transition duration-500 cursor-pointer">System Trips</h2>
      </Link>

      {status === "unauthenticated" && (
        <button className="text-roxo font-semibold" onClick={handleLoginClick}>
          Login
        </button>
      )}
      {status === "authenticated" && data.user && (
        <div
          className=" flex items-center gap-3 border-cinza-claro border border-solid rounded-full p-2 px-3 relative"
          onClick={() => setMenuIsOpen(!menuIsOpen)}
        >
          {menuIsOpen ? (
            <AiOutlineClose className="text-cinza cursor-pointer" size={16} />
          ) : (
            <AiOutlineMenu className="text-cinza cursor-pointer" size={16} />
          )}

          <Image
            height={32}
            width={32}
            alt={data.user.name!}
            src={data.user.image!}
            className="rounded-full"
          />

          {menuIsOpen && (
            <div className="z-50 absolute top-14 left-0 w-full h-[100px] bg-white rounded-lg shadow-md flex flex-col justify-center items-center">
              <Link href="/my-trips" onClick={() => setMenuIsOpen(false)}>
                <button className="text-roxo pb-2 border-b border-cinza border-solid text-sm font-semibold cursor-pointer">
                  Minhas Viagens
                </button>
              </Link>

              <button
                className="text-roxo pt-2 text-sm font-semibold cursor-pointer"
                onClick={handleLogoutClick}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default Header;
