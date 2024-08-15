"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function MiniProfile() {
  const { data: session } = useSession();
  return (
<<<<<<< HEAD
    <div className="flex items-top justify-between mt-14 ml-10 w-full">
=======
    <div className="flex items-center justify-between mt-14 scroll-ml-10">
>>>>>>> f2155a3b39c701a79acd02b3501ae6dfde3f3840
      <img
        src={session?.user?.image || "/800px-Instagram_logo_2016.webp"}
        alt="user-profile-pic or instagram logo"
        className="w-16 h-16 rounded-full border p-[2px]"
      />
      <div className="flex-1 ml-4">
        <h2 className="font-bold">{session?.user?.username}</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>
      {session ? (
        <button
          onClick={signOut}
<<<<<<< HEAD
          className="flex items-top text-blue-500 text-sm font-semibold "
=======
          className="text-blue-500 text-sm font-semibold"
>>>>>>> f2155a3b39c701a79acd02b3501ae6dfde3f3840
        >
          Sign Out
        </button>
      ) : (
        <button
          onClick={signIn}
<<<<<<< HEAD
          className="flex items-top text-blue-500 text-sm font-semibold "
        >
          Sign In
=======
          className="text-blue-500 text-sm font-semibold"
        >
          Sign In ssdsdas
>>>>>>> f2155a3b39c701a79acd02b3501ae6dfde3f3840
        </button>
      )}
    </div>
  );
}
