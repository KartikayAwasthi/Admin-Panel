import api from './axios';

export const getArticles = async () => {
  return await api.get('/api/v1/articles/admin/list');
};

export const createArticle = async (data) => {
  return await api.post('/api/v1/articles/', data);
};

export const updateArticle = async (slug, data) => {
  return await api.patch(`/api/v1/articles/${slug}`, data);
};

export const deleteArticle = async (slug) => {
  return await api.delete(`/api/v1/articles/${slug}`);
};