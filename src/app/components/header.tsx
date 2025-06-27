"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const { status, data } = useSession();
  const [menuIsOpen, setMenuIsOpen] = useState(true);
  console.log(status);

  return (
    <header className="container mx-auto p-6 bg-branco flex items-center justify-between shadow-md">
      <h2>System Trips</h2>

      {status === "authenticated" && data.user && (
        <div
          className="border border-roxo-light rounded-3xl px-4 py-2 flex items-center gap-4 relative"
          onClick={() => setMenuIsOpen(!menuIsOpen)}
        >
          {menuIsOpen ? (
            <AiOutlineClose className="text-cinza" size={16} />
          ) : (
            <AiOutlineMenu className="text-cinza" size={16} />
          )}

          <Image
            height={32}
            width={32}
            alt={data.user.name!}
            src={data.user.image!}
            className="rounded-full"
          />

          {menuIsOpen && (
            <div className="mt-2 w-48 rounded-md bg-branco shadow-lg absolute top-10">
              <button
                onClick={() => signOut()}
                className="block px-4 py-2 text-sm text-cinza hover:bg-roxo-light"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
      {status === "unauthenticated" && (
        <div>
          <button
            className="text-roxo active:text-roxo-dark"
            onClick={() => signIn()}
          >
            Login
          </button>
        </div>
      )}
    </header>
  );
};
export default Header;
