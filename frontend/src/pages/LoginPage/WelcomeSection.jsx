import React from "react";

import { BrowserOpenURL } from "@runtime";
import { APP_SOURCE } from "@config";
import LoginForm from "./LoginForm";
import logo from "@assets/images/logo-universal.png";

function WelcomeSection() {
  const handleClick = () => {
    BrowserOpenURL(APP_SOURCE);
  };

  return (
    <section className="flex flex-col justify-between p-8 mt-10 max-w-full bg-white rounded-[11px] w-[373px] h-[459px] max-md:px-1.5 max-md:mt-3.5">
      <div className="flex flex-col max-md:max-w-full py-1 px-9">
        <img
          loading="lazy"
          src={logo}
          alt="logo"
          className="self-center w-14 aspect-square"
        />
        <div className="flex flex-col mt-7 text-center text-zinc-900 max-md:max-w-full">
          <h1 className="text-xl font-semibold leading-6 max-md:max-w-full">
            Welcome to ChatCopilot
          </h1>
        </div>
        <LoginForm />
      </div>

      <div className="h-9 justify-between items-start inline-flex text-base leading-6 ">
        <div className="justify-between inline-flex">
          <img loading="lazy" src={logo} className="w-[30px] h-[30px]" />
          <div className="py-1 px-0.5 font-semibold text-[#1c1c1c] text-sm leading-7">
            ChatCopilot
          </div>
        </div>
        <div className="justify-start items-start flex leading-8">
          <div className="text-xs text-[#1c1c1c]/40 px-1">
            <button onClick={handleClick}>
              github.com/lw396/
              <br />
              chatcopilot
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WelcomeSection;
