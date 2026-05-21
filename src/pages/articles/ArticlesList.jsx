import { useEffect, useState } from "react";
import AdminLayout from "../../components/layout/AdminLayout";
import {
  deleteArticle,
  getArticles,
} from "../../api/articleApi";

import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const res = await getArticles({
        page: 1,
        limit: 10,
      });

      setArticles(res.data.data || []);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (slug) => {
    try {
      await deleteArticle(slug);

      toast.success("Article Deleted");

      fetchArticles();
    } catch (error) {
      toast.error("Delete Failed");
    }
  };

  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          Articles
        </h1>

        <Link
          to="/articles/create"
          className="bg-primary px-5 py-3 rounded-lg"
        >
          Create Article
        </Link>
      </div>

      <div className="bg-secondaryDark rounded-xl overflow-hidden border border-primary">
        <table className="w-full">
          <thead className="bg-primary text-white">
            <tr>
              <th className="p-4 text-left">
                Title
              </th>

              <th className="p-4 text-left">
                Status
              </th>

              <th className="p-4 text-left">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {articles.map((article) => (
              <tr
                key={article.slug}
                className="border-b border-gray-800"
              >
                <td className="p-4">
                  {article.title}
                </td>

                <td className="p-4">
                  {article.status}
                </td>

                <td className="p-4 flex gap-3">
                  <Link
                    to={`/articles/edit/${article.slug}`}
                    className="bg-blue-500 px-4 py-2 rounded-lg"
                  >
                    Edit
                  </Link>

                  <button
                    onClick={() =>
                      handleDelete(article.slug)
                    }
                    className="bg-red-500 px-4 py-2 rounded-lg"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
};

export default ArticlesList;