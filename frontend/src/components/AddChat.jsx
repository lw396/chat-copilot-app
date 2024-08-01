import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import clsx from "clsx";

import { AiOutlineMessage } from "react-icons/ai";

import { GetContactPerson, GetGroupContact } from "@api/api";

import ChatItem from "@components/ChatItem";

const AddChat = () => {
  const [nickname, setNickname] = useState("");
  const [contactList, setContactList] = useState([]);
  const [groupList, setGroupList] = useState([]);

  const handleAddChat = (event) => {
    setNickname(event.target.value);
  };

  useEffect(() => {
    const init = async () => {
      try {
        if (!nickname) {
          setGroupList([]);
          setContactList([]);
          return;
        }
        const contact = await GetContactPerson(nickname);
        console.log(contact);
        setGroupList(contact.data.data);
        const group = await GetGroupContact(nickname);
        setContactList(group.data.data);
      } catch (error) {
        toast.error(error.msg);
      }
    };

    init();
  }, [nickname]);

  return (
    <>
      <div className="absolute inset-0 flex top-40 justify-center">
        <div
          className={clsx(
            "h-12 w-96 border-spacing-y-1 border-[#c2c2c2] shadow-md pl-4 shadow-zinc-900/50",
            "flex items-center justify-between bg-white  border-2 rounded-2xl",
            "rounded-t-2xl"
          )}
        >
          <AiOutlineMessage size={20} />
          <input
            type="text"
            className="w-full h-full p-2 rounded-2xl focus:outline-none bg-white"
            placeholder="请输入昵称以添加聊天记录"
            onChange={handleAddChat}
          />
        </div>
      </div>
      {contactList && contactList.length > 0 ? (
        <div className="absolute inset-0 flex top-52 justify-center overflow-y-auto ">
          <div
            className={clsx(
              "h-72 w-96 border-[#c2c2c2]  bg-white shadow-md",
              "shadow-zinc-900/50 h-screen border-x-2 border-b-2 rounded-b-2xl"
            )}
          >
            {contactList.map((item, index) => (
              <ChatItem key={index} item={item} />
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default AddChat;
