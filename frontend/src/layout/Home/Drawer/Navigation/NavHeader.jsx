import React from "react";

import { FiAlignJustify } from "react-icons/fi";
import { AiOutlineSearch, AiOutlinePlus } from "react-icons/ai";

import logo from "@assets/images/logo-universal.png";

function NavHeader({ action, add }) {
  return (
    <header className="absolute top-0 left-0 bg-white px-3">
      <div className="flex gap-2 pl-2 pt-2 w-56 ">
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
      </div>

      <div className="flex gap-1.5 py-2 text-sm leading-5">
        <div className="flex gap-1 bg-slate-200/50 px-3 py-1.5 rounded-md">
          <AiOutlineSearch size={20} color="#9da3ae" />
          <input
            id="search"
            name="search"
            type="text"
            onChange={action}
            placeholder="搜索"
            className="bg-[#f1f3f7] border-spacing-1 w-32 focus:outline-none"
          />
        </div>
        <button className="bg-slate-200/50 p-1.5 rounded-md" onClick={add}>
          <AiOutlinePlus size={20} color="#9da3ae" />
        </button>
      </div>
    </header>
  );
}

export default NavHeader;
