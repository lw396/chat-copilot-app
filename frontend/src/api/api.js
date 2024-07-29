import axios from "@utils/axios";

// 登录
export const Login = async (username, password) => {
  return await axios.post("/auth/login", {
    username: username,
    password: password,
  });
};

export const User = async () => {
  return await axios.get("/v1/user");
};
