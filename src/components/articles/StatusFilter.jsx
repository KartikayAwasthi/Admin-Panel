import { STATUS_OPTIONS } from "../../utils/constants";

const StatusFilter = ({ value, onChange }) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="px-4 py-3 rounded-lg border border-gray-300 outline-none focus:border-primary"
    >
      <option value="">All Status</option>
      {STATUS_OPTIONS.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};

export default StatusFilter;
