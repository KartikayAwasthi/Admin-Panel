import API from "../api/axios";

export const articleService = {
  getArticles: async (params) => {
    return await API.get("/api/v1/articles/admin/list", { params });
  },

  getArticleBySlug: async (slug) => {
    return await API.get(`/api/v1/articles/${slug}`);
  },

  createArticle: async (data) => {
    return await API.post("/api/v1/articles/", data);
  },

  updateArticle: async (slug, data) => {
    return await API.patch(`/api/v1/articles/${slug}`, data);
  },

  deleteArticle: async (slug) => {
    return await API.delete(`/api/v1/articles/${slug}`);
  },

  getStats: async () => {
    return await API.get("/api/v1/articles/admin/stats");
  },
};
