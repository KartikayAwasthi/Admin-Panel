import { useEffect, useState } from "react";

import AdminLayout from "../../components/layout/AdminLayout";

import StatsCard from "../../components/dashboard/StatsCard";

import { getStats } from "../../api/articleApi";

const Dashboard = () => {
  const [stats, setStats] = useState({});

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const res = await getStats();

      setStats(res.data);
    } catch (error) {
      console.log(error);
    }
  };

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

      <div className="grid grid-cols-4 gap-6">

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

    </AdminLayout>
  );
};

export default Dashboard;