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
    <div className="bg-secondaryDark rounded-xl border border-gray-800 p-8">
      <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
        <TrendingUp size={24} className="text-primary" />
        Trending Now
      </h3>

      <div className="space-y-4">
        {articles.length > 0 ? (
          articles.map((article, i) => (
            <div key={article.slug} className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-800 transition">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-primary to-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                {i + 1}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-white truncate">{article.title}</p>
                <p className="text-xs text-gray-500">+{Math.floor(Math.random() * 1000)} views</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center py-8">No trending articles yet</p>
        )}
      </div>
    </div>
  );
};

export default TrendingArticles;
