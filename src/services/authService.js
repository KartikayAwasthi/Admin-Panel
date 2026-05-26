import API from "../api/axios";

export const authService = {
  login: async (data) => {
    return await API.post("/api/v1/auth/login", data);
  },

  logout: () => {
    localStorage.removeItem("token");
  },

  isAuthenticated: () => {
    return !!localStorage.getItem("token");
  },

  getToken: () => {
    return localStorage.getItem("token");
  },

  setToken: (token) => {
    localStorage.setItem("token", token);
  },
};
