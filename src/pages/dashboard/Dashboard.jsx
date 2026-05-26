import { useEffect, useState } from "react";

import AdminLayout from "../../components/layout/AdminLayout";

import StatsCard from "../../components/dashboard/StatsCard";

import RecentArticles from "../../components/dashboard/RecentArticles";

import TrendingArticles from "../../components/dashboard/TrendingArticles";

import OverviewChart from "../../components/dashboard/OverviewChart";

import Loader from "../../components/ui/Loader";

import { articleService } from "../../services/articleService";

const Dashboard = () => {
  const [stats, setStats] = useState({});

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const res = await articleService.getStats();

      setStats(res.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loader />;

  return (
    <AdminLayout>

      <div className="mb-8">
        <h1 className="text-4xl font-bold">
          Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Welcome to TechPolarity Admin Panel
        </p>
      </div>

      <div className="grid grid-cols-4 gap-6 mb-8">

        <StatsCard
          title="Total Articles"
          value={stats.total || 0}
        />

        <StatsCard
          title="Published"
          value={stats.published || 0}
        />

        <StatsCard
          title="Draft"
          value={stats.draft || 0}
        />

        <StatsCard
          title="Trending"
          value={stats.trending || 0}
        />

      </div>

      <div className="grid grid-cols-3 gap-6">

        <div className="col-span-2">
          <OverviewChart />
        </div>

        <TrendingArticles />

      </div>

      <div className="mt-8">
        <RecentArticles />
      </div>

    </AdminLayout>
  );
};

export default Dashboard;