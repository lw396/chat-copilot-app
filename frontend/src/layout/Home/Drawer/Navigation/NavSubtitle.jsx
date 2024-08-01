import React from "react";

import { AiOutlineSwap } from "react-icons/ai";

function NavSubtitle({ date, action }) {
  return (
    <div className="flex justify-between px-4 text-xs leading-8 text-zinc-900">
      <div>{date}</div>
      <button onClick={action}>
        <AiOutlineSwap size={15} />
      </button>
    </div>
  );
}

export default NavSubtitle;
