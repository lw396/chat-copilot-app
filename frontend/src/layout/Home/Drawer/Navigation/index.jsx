import React, { useState, useEffect } from "react";

import NavHeader from "./NavHeader";
import DateDivider from "./NavSubtitle";
import ChatItem from "./NavChatItem";
import UserActions from "./NavFooter";

import { GetContactPerson, GetGroupContact } from "@api/api";
import toast from "react-hot-toast";

const Navigation = () => {
  const [offset, setOffset] = useState(0);
  const [chatList, setChatList] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isSwitch, setIsSwitch] = useState(false);

  const handleSearch = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSwitch = () => {
    setIsSwitch(!isSwitch);
  };

  useEffect(() => {
    const init = async () => {
      try {
        let list = [];
        if (!isSwitch) {
          list = await GetContactPerson(offset, searchValue);
        } else {
          list = await GetGroupContact(offset, searchValue);
        }
        setChatList(list.data.data || []);
      } catch (error) {
        toast.error(error.msg);
      }
    };
    init();
  }, [offset, searchValue, isSwitch]);

  return (
    <main className="flex flex-col p-4 w-56 overflow-y-auto h-screen bg-slate-50">
      <NavHeader action={handleSearch} />
      <div className="mb-11 mt-16">
        <div className=" rounded-xl">
          <DateDivider
            date={!isSwitch ? "联系人" : "群组"}
            action={handleSwitch}
          />
          {chatList.map((item, index) => (
            <ChatItem key={index} item={item} />
          ))}
        </div>
      </div>
      <UserActions />
    </main>
  );
};

export default Navigation;
