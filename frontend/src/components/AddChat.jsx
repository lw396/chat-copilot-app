import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import clsx from "clsx";
import { AiOutlineMessage } from "react-icons/ai";

import {
  GetContactPerson,
  GetGroupContact,
  AddContactPerson,
  AddGroupContact,
} from "@api/api";
import ChatItem from "@components/ChatItem";
import { Warn } from "@utils/sweetalert";

const AddChat = () => {
  const [nickname, setNickname] = useState("");
  const [contactList, setContactList] = useState([]);
  const [groupList, setGroupList] = useState([]);

  const handleSearchChat = (event) => {
    setNickname(event.target.value);
  };

  const handleAddChat = (item, type) => {
    const text = `确定要添加 ${item.remark || item.nickname}  的聊天吗？`;
    Warn("添加聊天", text).then(async (result) => {
      try {
        if (!result.isConfirmed) {
          return;
        }
        if (type === "group") {
          await AddGroupContact(item.usr_name);
        } else if (type === "contact") {
          await AddContactPerson(item.usr_name);
        }
        toast.success("添加成功！");
      } catch (error) {
        console.log(error);
        toast.error(error.msg);
      }
    });
  };

  useEffect(() => {
    const init = async () => {
      try {
        if (!nickname) {
          setContactList([]);
          setGroupList([]);
          return;
        }
        const contact = (await GetContactPerson(nickname)).data.data || [];
        const group = (await GetGroupContact(nickname)).data.data || [];
        setContactList(contact);
        setGroupList(group);
      } catch (error) {
        console.error(error);
        toast.error(error.msg);
      }
    };

    init();
  }, [nickname]);

  return (
    <div className="w-full h-full">
      <div className="absolute inset-0 flex top-40 justify-center">
        <div
          className={clsx(
            "h-12 w-96 border-spacing-y-1 border-[#c2c2c2] shadow-md pl-4 shadow-zinc-900/50",
            "flex items-center justify-between bg-white border-2",
            contactList.length + groupList.length > 0
              ? "rounded-t-2xl"
              : "rounded-2xl"
          )}
        >
          <AiOutlineMessage size={20} />
          <input
            type="text"
            className="w-full h-full p-2 rounded-2xl focus:outline-none bg-white"
            placeholder="请输入昵称以添加聊天记录"
            onChange={handleSearchChat}
          />
        </div>
      </div>
      {contactList.length + groupList.length > 0 && (
        <div className="absolute inset-0 flex top-52 justify-center ">
          <div
            className={clsx(
              "h-72 w-96 border-[#c2c2c2] bg-white shadow-md shadow-zinc-900/50",
              "border-x-2 border-b-2 rounded-b-2xl overflow-y-auto"
            )}
          >
            {contactList.map((item, index) => (
              <ChatItem
                key={index}
                item={item}
                active={() => handleAddChat(item, "contact")}
              />
            ))}
            {groupList.map((item, index) => (
              <ChatItem
                key={index}
                item={item}
                active={() => handleAddChat(item, "group")}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AddChat;
