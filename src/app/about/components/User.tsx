"use client"
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function User() {
  const { data } = useSession();
  
  if (!data?.user) {
    console.log("No user data found, redirecting to home page.");
    return redirect("/");
  }
  
  return (
    <div className="flex flex-col items-center justify-center h-full">
      {data?.user ? (
        <>
          <h1 className="text-2xl font-bold mb-4">User Information</h1>
          <p className="text-lg">Name: {data.user?.name}</p>
          <p className="text-lg">Email: {data.user?.email}</p>
        </>
      ) : (
        <p className="text-lg">No user information available.</p>
      )}
    </div>
  );
}
