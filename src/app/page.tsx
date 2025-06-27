"use client"
import { signIn } from "next-auth/react";

export default function Home() {
  return (
    <div>
        <h1>Home Page</h1>
        <p>Welcome to the home page!</p>
        <div>
          <button className="bg-white-500 text-gray-800 px-4 py-2 rounded hover:border-white" onClick={() => {signIn()}}>Login</button>
          {/* <button onClick={() => {}}>Login</button> */}
        </div>
    </div>
  );
}
