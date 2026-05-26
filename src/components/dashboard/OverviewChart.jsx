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
    <div className="bg-secondaryDark rounded-xl border border-gray-800 p-8">
      <h3 className="text-xl font-bold text-white mb-8">Articles Overview</h3>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#333" />
          <XAxis dataKey="name" stroke="#666" />
          <YAxis stroke="#666" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1a1a1a",
              border: "1px solid #FF6347",
              borderRadius: "8px",
            }}
            labelStyle={{ color: "#fff" }}
          />
          <Line
            type="monotone"
            dataKey="articles"
            stroke="#FF6347"
            strokeWidth={3}
            dot={{ fill: "#FF6347", r: 5 }}
            activeDot={{ r: 7 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OverviewChart;
