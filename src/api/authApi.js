import API from "./axios";

export const loginAdmin = async (data) => {
  return await API.post("/api/v1/auth/login", data);
};