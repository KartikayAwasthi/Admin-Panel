const StatsCard = ({
  title,
  value,
}) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">

      <h3 className="text-gray-500 text-sm">
        {title}
      </h3>

      <h1 className="text-4xl font-bold text-primary mt-3">
        {value}
      </h1>

    </div>
  );
};

export default StatsCard;