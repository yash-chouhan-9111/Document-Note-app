import React from "react";
import { FaHeart } from "react-icons/fa6";


const Background = ({ checked }) => {
  return (
    <div className={`fixed z-[1] w-full h-screen ${
      checked ? "bg-zinc-800" : "bg-zinc-200" }`}>
      <nav className="w-full py-10 absolute top-[5%] flex justify-center text-zinc-500 font-semibold text-xl">
        Document
      </nav>
      <h1
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[11vw]  leading-none tracking-tight ${
          checked ? "text-zinc-900" : "text-zinc-300"
        } font-semibold anime`}
      >
        Docs.
      </h1>

      <div className="absolute bottom-[0] left-[0] flex gap-1 px-10 py-2">
        <h5 className={`text-xs  ${
      !checked ? "text-gray-800" : "text-zinc-200" }`}>Made by Yash Chouhan with</h5>
        <FaHeart color="red" />
      </div>
    </div>
  );
};

export default Background;
