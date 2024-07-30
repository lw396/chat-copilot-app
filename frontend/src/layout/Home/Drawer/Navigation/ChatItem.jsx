import React from "react";

function ChatItem({ icon, text }) {
  return (
    <div className="flex flex-col py-2.5 w-full border-t-2 border-zinc-400 border-opacity-10">
      <div className="flex gap-2 pl-3 text-xs leading-4 ">
        <img
          loading="lazy"
          src={icon}
          className="shrink-0 w-6 aspect-square"
          alt=""
        />
        <div className="my-auto">{text}</div>
      </div>
    </div>
  );
}

export default ChatItem;
