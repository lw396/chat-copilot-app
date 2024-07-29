import clsx from "clsx";
import React from "react";

function Header() {
  return (
    <header
      className={clsx(
        "left-[40px] top-[40px] absolute self-start text-xl font-semibold leading-6",
        " text-zinc-900 max-md:max-w-full"
      )}
    >
      登录账号
    </header>
  );
}

export default Header;
