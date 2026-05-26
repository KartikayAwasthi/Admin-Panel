import { TrendingUp } from "lucide-react";
import Loader from "../ui/Loader";
import { useEffect, useState } from "react";
import { articleService } from "../../services/articleService";

const TrendingArticles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTrendingArticles();
  }, []);

  const fetchTrendingArticles = async () => {
    try {
      const res = await articleService.getArticles({ page: 1, limit: 5, trending: true });
      setArticles(res.data.data || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loader />;

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
        <TrendingUp size={24} className="text-primary" />
        Trending Now
      </h3>

      <div className="space-y-4">
        {articles.map((article, i) => (
          <div key={article.slug} className="flex items-center gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
              {i + 1}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-gray-900 truncate">{article.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingArticles;
