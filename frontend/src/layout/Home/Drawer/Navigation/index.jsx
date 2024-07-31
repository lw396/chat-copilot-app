import React, { useState, useEffect } from "react";
import ChatHeader from "./NavHeader";
import DateDivider from "./DateDivider";
import ChatItem from "./ChatItem";
import UserActions from "./UserActions";

import { GetContactPerson, GetGroupContact } from "@api/api";
import toast from "react-hot-toast";

const Navigation = () => {
  const [offset, setOffset] = useState(0);
  const [contact, setContact] = useState([]);
  const [group, setGroup] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const init = async () => {
      try {
        const contact = await GetContactPerson(offset, search);
        const group = await GetGroupContact(offset, search);

        setContact(contact.data.data || []);
        setGroup(group.data.data || []);
      } catch (error) {
        toast.error(error.msg);
      }
    };

    init();
  }, []);

  return (
    <main className="flex flex-col p-4 w-60 overflow-y-auto h-screen">
      <ChatHeader />

      <div className="mb-11 mt-16">
        <div className="bg-slate-50 rounded-xl">
          {contact.length > 0 && <DateDivider date="联系人" />}
          {contact.map((item, index) => (
            <ChatItem key={index} item={item} />
          ))}
        </div>

        <div className="bg-slate-50 rounded-xl">
          {group.length > 0 && <DateDivider date="群组" />}
          {group.map((item, index) => (
            <ChatItem key={index} item={item} />
          ))}
        </div>
      </div>

      <UserActions />
    </main>
  );
};

export default Navigation;
