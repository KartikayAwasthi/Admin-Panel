import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import AdminLayout from "../../components/layout/AdminLayout";
import ArticleForm from "../../components/articles/ArticleForm";
import { useArticles } from "../../hooks/useArticles";

const CreateArticle = () => {
  const navigate = useNavigate();
  const { createArticle, loading } = useArticles();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    if (typeof data.tags === "string") {
      data.tags = data.tags.split(",").map((t) => t.trim());
    }

    const success = await createArticle(data);
    if (success) {
      setTimeout(() => navigate("/articles"), 1500);
    }
  };

  return (
    <AdminLayout>
      <div className="mb-8">
        <h1 className="text-4xl font-bold">Create New Article</h1>
        <p className="text-gray-500 mt-2">Write and publish a new article</p>
      </div>

      <ArticleForm onSubmit={onSubmit} isLoading={loading} />
    </AdminLayout>
  );
};

export default CreateArticle;