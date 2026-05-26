import { Edit, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import { formatDate } from "../../utils/formatDate";

const ArticleTable = ({ articles, onDelete, loading }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-50 border-b border-gray-200">
          <tr>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Title</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Date</th>
            <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">Actions</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article) => (
            <tr key={article.slug} className="border-b border-gray-200 hover:bg-gray-50 transition">
              <td className="px-6 py-4">
                <div>
                  <p className="font-medium text-gray-900">{article.title}</p>
                  <p className="text-sm text-gray-500">{article.slug}</p>
                </div>
              </td>
              <td className="px-6 py-4">
                <Badge variant={article.status === "published" ? "success" : "warning"}>
                  {article.status}
                </Badge>
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">{formatDate(article.created_at)}</td>
              <td className="px-6 py-4">
                <div className="flex items-center justify-end gap-3">
                  <Link
                    to={`/articles/edit/${article.slug}`}
                    className="text-blue-600 hover:text-blue-700 p-2 hover:bg-blue-50 rounded-lg transition"
                  >
                    <Edit size={18} />
                  </Link>
                  <button
                    onClick={() => onDelete(article.slug, article.title)}
                    disabled={loading}
                    className="text-red-600 hover:text-red-700 p-2 hover:bg-red-50 rounded-lg transition disabled:opacity-50"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ArticleTable;
