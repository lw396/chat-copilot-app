import React from "react";

function ChatItem({ item, active }) {
  return (
    <button
      className="flex flex-col py-3 w-full border-t-2 border-zinc-400 border-opacity-10"
      onClick={active}
    >
      <div className="flex gap-2 pl-3 text-xs leading-6">
        <img
          loading="lazy"
          src={item.head_img_url}
          className="shrink-0 w-8 aspect-square"
          alt=""
        />
        <div className="my-auto pl-1">{item.remark || item.nickname}</div>
      </div>
    </button>
  );
}

export default ChatItem;
