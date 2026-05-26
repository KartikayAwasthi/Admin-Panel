import { useEffect, useState } from "react";
import { articleService } from "../../services/articleService";
import Badge from "../ui/Badge";
import Loader from "../ui/Loader";
import EmptyState from "../ui/EmptyState";
import { formatDate } from "../../utils/formatDate";

const RecentArticles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRecentArticles();
  }, []);

  const fetchRecentArticles = async () => {
    try {
      const res = await articleService.getArticles({ page: 1, limit: 5 });
      setArticles(res.data.data || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loader />;
  if (articles.length === 0) return <EmptyState title="No articles yet" />;

  return (
    <div className="bg-secondaryDark rounded-xl border border-gray-800 overflow-hidden">
      <div className="p-8 border-b border-gray-800">
        <h3 className="text-xl font-bold text-white">Recent Articles</h3>
      </div>

      <div className="divide-y divide-gray-800">
        {articles.map((article) => (
          <div key={article.slug} className="p-6 hover:bg-gray-800/50 transition">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="font-semibold text-white text-lg">{article.title}</p>
                <p className="text-sm text-gray-500 mt-2">{formatDate(article.created_at)}</p>
              </div>
              <Badge variant={article.status === "published" ? "success" : "warning"}>
                {article.status}
              </Badge>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentArticles;
