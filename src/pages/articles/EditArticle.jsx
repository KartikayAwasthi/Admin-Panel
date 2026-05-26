import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AdminLayout from "../../components/layout/AdminLayout";
import ArticleForm from "../../components/articles/ArticleForm";
import { useArticles } from "../../hooks/useArticles";
import { articleService } from "../../services/articleService";
import Loader from "../../components/ui/Loader";

const EditArticle = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { updateArticle, loading } = useArticles();
  const [article, setArticle] = useState(null);
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    fetchArticle();
  }, [slug]);

  const fetchArticle = async () => {
    try {
      const res = await articleService.getArticleBySlug(slug);
      setArticle(res.data);
    } catch (error) {
      console.error(error);
      navigate("/articles");
    } finally {
      setInitialLoading(false);
    }
  };

  const onSubmit = async (data) => {
    if (typeof data.tags === "string") {
      data.tags = data.tags.split(",").map((t) => t.trim());
    }

    const success = await updateArticle(slug, data);
    if (success) {
      setTimeout(() => navigate("/articles"), 1500);
    }
  };

  if (initialLoading) return <Loader />;

  return (
    <AdminLayout>
      <div className="mb-8">
        <h1 className="text-4xl font-bold">Edit Article</h1>
        <p className="text-gray-500 mt-2">Update article details</p>
      </div>

      {article && <ArticleForm onSubmit={onSubmit} isLoading={loading} initialData={article} />}
    </AdminLayout>
  );
};

export default EditArticle;