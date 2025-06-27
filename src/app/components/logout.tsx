"use client"
import { signOut } from "next-auth/react";

export default function Logout(){
    return (
        <button className="bg-gray-500 text-white-800 px-4 py-2 rounded hover:cursor-pointer hover:border-white" onClick={() => {signOut()}}>Logout</button>
    );
}