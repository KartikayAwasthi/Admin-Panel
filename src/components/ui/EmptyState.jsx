import { FileText } from "lucide-react";

const EmptyState = ({ title = "No data found", description = "Try adjusting your filters" }) => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <FileText size={48} className="text-gray-300 mb-4" />
      <h3 className="text-lg font-semibold text-gray-600">{title}</h3>
      <p className="text-gray-500 text-sm mt-1">{description}</p>
    </div>
  );
};

export default EmptyState;
