import axios from "@utils/axios";

// 登录
export const Login = async (username, password) => {
  return await axios.post("/auth/login", {
    username: username,
    password: password,
  });
};

// 获取管理员信息
export const User = async () => {
  return await axios.get("/v1/user");
};

/* 联系人 */
// 查看已添加联系人列表
export const GetContactPersonList = async (offset, search) => {
  return await axios.get("/v1/contact_person_list", {
    params: { offset: offset, nickname: search, remark: search },
  });
};

// 查看所有联系人
export const GetContactPerson = async (nickname) => {
  return await axios.get("/v1/contact_person", {
    params: { nickname: nickname },
  });
};

// 添加联系人
export const AddContactPerson = async (usr_name) => {
  return await axios.post("/v1/contact_person", { user_name: usr_name });
};

/* 群组 */
// 查看已添加群组列表
export const GetGroupContactList = async (offset, search) => {
  return await axios.get("/v1/group_contact_list", {
    params: { offset: offset, nickname: search },
  });
};

// 查看所有群聊
export const GetGroupContact = async (nickname) => {
  return await axios.get("/v1/group_contact", {
    params: { nickname: nickname },
  });
};

// 添加群组
export const AddGroupContact = async (usr_name) => {
  return await axios.post("/v1/group_contact", { user_name: usr_name });
};
