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

export const GetContactPersonList = async (offset, search) => {
  return await axios.get("/v1/contact_person_list", {
    params: { offset: offset, nickname: search, remark: search },
  });
};

export const GetGroupContactList = async (offset, search) => {
  return await axios.get("/v1/group_contact_list", {
    params: { offset: offset, nickname: search },
  });
};

export const GetContactPerson = async (nickname) => {
  return await axios.get("/v1/contact_person", {
    params: { nickname: nickname },
  });
};

export const GetGroupContact = async (nickname) => {
  return await axios.get("/v1/group_contact", {
    params: { nickname: nickname },
  });
};
