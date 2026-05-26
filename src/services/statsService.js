import API from "../api/axios";

export const statsService = {
  getStats: async () => {
    return await API.get("/api/v1/articles/admin/stats");
  },
};
