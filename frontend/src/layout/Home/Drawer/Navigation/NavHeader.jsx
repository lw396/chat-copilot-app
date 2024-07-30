import React from "react";
import clsx from "clsx";

import { FiAlignJustify } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";

import logo from "@assets/images/logo-universal.png";

function ChatHeader() {
  return (
    <>
      <header className="flex gap-2 p-2 w-52 absolute top-0 bg-white">
        <div className="flex justify-center items-center p-1 my-auto rounded-lg">
          <button>
            <FiAlignJustify />
          </button>
        </div>
        <div className="justify-between inline-flex px-1">
          <img loading="lazy" src={logo} className="w-[30px] h-[30px]" />
          <div className="py-1 px-0.5 font-semibold text-[#1c1c1c] text-sm leading-7">
            ChatCopilot
          </div>
        </div>
      </header>

      <div className="flex gap-2 p-2 mt-7 text-sm leading-5  bg-opacity-50 text-zinc-900">
        <input
          id="search"
          name="search"
          type="text"
          placeholder="搜索"
          autoComplete="on"
          className={clsx(
            "block w-full  border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset  rounded-2xl"
          )}
        >
          {/* <AiOutlineSearch size={20} color="#1c1c1c" /> */}
        </input>
        <span className="my-auto text-center "></span>
      </div>
    </>
  );
}

export default ChatHeader;
