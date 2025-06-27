import React, { ReactNode } from "react";
import Logout from "../components/logout";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <header className="flex justify-between px-8 items-center h-20 bg-gray-800 text-white">
        <h2>About Layout</h2>
        <Logout />
      </header>
      <div className="w-full border border-red">{children}</div>
    </>
  );
};
export default Layout;
