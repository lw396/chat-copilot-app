import React from "react";
import { FiAlignJustify } from "react-icons/fi";
import { IoIosAddCircle } from "react-icons/io";

import logo from "@assets/images/logo-universal.png";

function ChatHeader() {
  return (
    <>
      <header className="flex gap-2 px-4 rounded-2xl backdrop-blur-[10px] bg-white bg-opacity-80">
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

      <button className="flex gap-2 p-3 mt-3 text-sm leading-5 text-center rounded-2xl bg-slate-200 bg-opacity-50 text-zinc-900">
        <IoIosAddCircle size={20} color="#1c1c1c" />
        <span className="my-auto">New chat</span>
      </button>
    </>
  );
}

export default ChatHeader;
