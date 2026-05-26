import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const OverviewChart = () => {
  const data = [
    { name: "Jan", articles: 4 },
    { name: "Feb", articles: 3 },
    { name: "Mar", articles: 8 },
    { name: "Apr", articles: 12 },
    { name: "May", articles: 15 },
    { name: "Jun", articles: 18 },
  ];

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-6">Articles Overview</h3>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="articles" stroke="#FF6347" strokeWidth={2} dot={{ fill: "#FF6347" }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OverviewChart;
