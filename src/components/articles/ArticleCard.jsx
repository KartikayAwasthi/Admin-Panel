import { Eye, Trash2 } from "lucide-react";
import Badge from "../ui/Badge";
import { truncate } from "../../utils/helpers";
import { formatDate } from "../../utils/formatDate";

const ArticleCard = ({ article, onDelete, onView }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 flex-1">{article.title}</h3>
        <Badge variant={article.status === "published" ? "success" : "warning"}>
          {article.status}
        </Badge>
      </div>

      <p className="text-gray-600 text-sm mb-4">{truncate(article.description, 100)}</p>

      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-500">{formatDate(article.created_at)}</span>
        <div className="flex gap-2">
          <button onClick={() => onView(article.slug)} className="text-blue-600 hover:bg-blue-50 p-2 rounded">
            <Eye size={18} />
          </button>
          <button onClick={() => onDelete(article.slug)} className="text-red-600 hover:bg-red-50 p-2 rounded">
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
