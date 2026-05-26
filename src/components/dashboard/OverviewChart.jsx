import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { month: 'Jan', articles: 20 },
  { month: 'Feb', articles: 35 },
  { month: 'Mar', articles: 50 },
  { month: 'Apr', articles: 65 },
];

const OverviewChart = () => {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 h-96">
      <h2 className="text-xl font-bold mb-5">Overview</h2>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="articles" stroke="#7c3aed" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OverviewChart;