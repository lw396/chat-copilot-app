import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";

import NavHeader from "./NavHeader";
import NavSubtitle from "./NavSubtitle";
import NavFooter from "./NavFooter";

import ChatItem from "@components/ChatItem";
import AddChat from "@components/AddChat";
import { GetContactPersonList, GetGroupContactList } from "@api/api";

const Navigation = () => {
  const [offset, setOffset] = useState(0);
  const [chatList, setChatList] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isOpen, setIsOpen] = useState(true);
  const [isSwitch, setIsSwitch] = useState(false);
  const [isAddChat, setIsAddChat] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);

  const handleSearch = (event) => {
    setSearchValue(event.target.value);
  };

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleSwitch = () => {
    setIsSwitch(!isSwitch);
  };

  const handleAddChat = () => {
    setIsAddChat(!isAddChat);
  };

  const updateChatList = () => {
    setIsUpdate(!isUpdate);
  };

  useEffect(() => {
    const init = async () => {
      try {
        let list = [];
        if (!isSwitch) {
          list = await GetContactPersonList(offset, searchValue);
        } else {
          list = await GetGroupContactList(offset, searchValue);
        }
        setChatList(list.data.data || []);
      } catch (error) {
        toast.error(error.msg);
      }
    };
    init();
  }, [offset, searchValue, isSwitch, isUpdate]);

  return (
    <nav className={`flex flex-col w-60 p-3 overflow-y-auto h-screen`}>
      <NavHeader
        search={handleSearch}
        isShow={isOpen}
        add={handleAddChat}
        open={toggleDrawer}
      />

      {isOpen && (
        <div className="mb-11 mt-20 bg-slate-50 rounded-2xl px-3">
          <NavSubtitle
            date={!isSwitch ? "联系人" : "群组"}
            action={handleSwitch}
          />
          {chatList.map((item, index) => (
            <ChatItem key={index} item={item} />
          ))}
        </div>
      )}

      <NavFooter />

      {isAddChat && <AddChat close={handleAddChat} update={updateChatList} />}
    </nav>
  );
};

export default Navigation;
