import React from "react";
import toast from "react-hot-toast";

import useAuth from "@hooks/useAuth";
import useScriptRef from "@hooks/useScriptRef";
import clsx from "clsx";

export default function LoginForm() {
  const { login } = useAuth();
  const scriptedRef = useScriptRef();

  const handleLogin = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const username = formData.get("username");
    const password = formData.get("password");

    try {
      await login(username, password);
      toast.success("登录成功");
    } catch (error) {
      toast.error(error.msg);
    }
  };

  return (
    <form
      className="flex flex-col text-sm leading-4 max-w-[313px] text-zinc-900 text-opacity-40"
      onSubmit={handleLogin}
    >
      <input
        className="px-5 py-2.5 mt-6 whitespace-nowrap rounded-lg bg-slate-200 bg-opacity-50 w-full"
        type="text"
        name="username"
        required
        placeholder="请输入用户名"
        aria-label="Username"
      />
      <input
        className="px-5 py-2.5 mt-4 whitespace-nowrap rounded-lg bg-slate-200 bg-opacity-50 w-full"
        type="password"
        name="password"
        required
        placeholder="请输入密码"
        aria-label="Password"
      />
      <div
        className={clsx(
          "flex flex-col justify-center mt-10 text-base leading-4 text-center text-white",
          "max-md:max-w-full"
        )}
      >
        <button
          className="px-2 py-2.5  rounded-xl bg-zinc-900 max-md:px-2 max-md:max-w-full"
          type="submit"
        >
          登录
        </button>
      </div>
    </form>
  );
}
