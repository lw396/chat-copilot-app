import React, { useState, useCallback } from "react";

import { AiFillSetting, AiFillSun, AiFillMoon } from "react-icons/ai";

import avatar from "@assets/images/avatar.png";

function UserActions() {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = useCallback(() => {
    setIsDark((prev) => !prev);
  }, []);

  return (
    <div className="flex flex-wrap justify-between py-3 w-52 absolute bottom-0 bg-white">
      <div className="inline-flex px-2">
        <img src={avatar} alt="avatar" className="w-8 h-8 rounded-full" />
        <div className="p-1 leading-7">Tom</div>
      </div>
      <div className="inline-flex">
        <button className="p-2">
          <AiFillSetting size={20} />
        </button>

        <button className="p-2" onClick={toggleTheme}>
          {isDark ? <AiFillSun size={20} /> : <AiFillMoon size={20} />}
        </button>
      </div>
    </div>
  );
}

export default UserActions;
