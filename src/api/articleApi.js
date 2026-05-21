import API from "./axios";

export const getArticles = async (params) => {
  return await API.get("/api/v1/articles/admin/list", {
    params,
  });
};

export const createArticle = async (data) => {
  return await API.post("/api/v1/articles/", data);
};

export const updateArticle = async (slug, data) => {
  return await API.patch(`/api/v1/articles/${slug}`, data);
};

export const deleteArticle = async (slug) => {
  return await API.delete(`/api/v1/articles/${slug}`);
};

export const getStats = async () => {
  return await API.get("/api/v1/articles/admin/stats");
};