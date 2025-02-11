import Link from "next/link";
import React from "react";
import { RiEmotionHappyLine } from "react-icons/ri";
import { IoHome } from "react-icons/io5";

export default function LeftSidebar() {
  return (
    <div className="flex flex-col gap-4 p-3">
      <Link href="/"
      className="flex items-center justify-start pl-2"
      >
        <RiEmotionHappyLine className="text-4xl" />
        <span className="font-bold px-2">My Happy Day</span>
      </Link>
      <Link
        href="/"
        className="flex items-center p-3 hover:bg-gray-100 rounded-full transition-all duration-200 gap-2 w-fit"
      >
        <IoHome className="w-7 h-7" />
        <span className="font-bold hidden xl:inline">Home</span>
      </Link>
      <button className="bg-yellow-400 text-ehite rounded-full hover:brightness-95 transition-all duration-200 w-48 h-9 shadow-md hidden xl:inline">
        Sign In
      </button>
    </div>
  );
}
