import StatsCard from '../../components/dashboard/StatsCard';
import OverviewChart from '../../components/dashboard/OverviewChart';
import RecentArticles from '../../components/dashboard/RecentArticles';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <StatsCard title="Total Articles" value="120" />
        <StatsCard title="Published" value="85" />
        <StatsCard title="Draft" value="20" />
        <StatsCard title="Trending" value="15" />
      </div>

      <OverviewChart />

      <RecentArticles />
    </div>
  );
};

export default Dashboard;