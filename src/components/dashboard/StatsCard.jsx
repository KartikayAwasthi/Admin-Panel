const StatsCard = ({
  title,
  value,
}) => {
  return (
    <div className="bg-secondaryDark p-8 rounded-2xl shadow-lg border border-gray-800 hover:border-primary transition-all duration-300 hover:shadow-primary/20">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-gray-400 text-sm font-medium">
            {title}
          </h3>
          <h1 className="text-5xl font-bold text-primary mt-3">
            {value}
          </h1>
        </div>
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
          <span className="text-primary text-xl font-bold">
            +
          </span>
        </div>
      </div>

      <p className="text-xs text-gray-500 mt-4">
        Last 30 days
      </p>
    </div>
  );
};

export default StatsCard;