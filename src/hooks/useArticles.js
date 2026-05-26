import { useState, useCallback } from "react";
import { articleService } from "../services/articleService";
import { showSuccess, showError } from "../utils/toast";

export const useArticles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchArticles = useCallback(async (params = {}) => {
    try {
      setLoading(true);
      const res = await articleService.getArticles(params);
      setArticles(res.data.data || []);
      setError(null);
    } catch (err) {
      setError(err.message);
      showError("Failed to fetch articles");
    } finally {
      setLoading(false);
    }
  }, []);

  const createArticle = useCallback(async (data) => {
    try {
      setLoading(true);
      await articleService.createArticle(data);
      showSuccess("Article created successfully!");
      return true;
    } catch (err) {
      showError(err.response?.data?.message || "Failed to create article");
      return false;
    } finally {
      setLoading(false);
    }
  }, []);

  const updateArticle = useCallback(async (slug, data) => {
    try {
      setLoading(true);
      await articleService.updateArticle(slug, data);
      showSuccess("Article updated successfully!");
      return true;
    } catch (err) {
      showError(err.response?.data?.message || "Failed to update article");
      return false;
    } finally {
      setLoading(false);
    }
  }, []);

  const deleteArticle = useCallback(async (slug) => {
    try {
      setLoading(true);
      await articleService.deleteArticle(slug);
      showSuccess("Article deleted successfully!");
      return true;
    } catch (err) {
      showError(err.response?.data?.message || "Failed to delete article");
      return false;
    } finally {
      setLoading(false);
    }
  }, []);

  return { articles, loading, error, fetchArticles, createArticle, updateArticle, deleteArticle };
};
