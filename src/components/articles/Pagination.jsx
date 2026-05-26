import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "../ui/Button";

const Pagination = ({ page, totalPages, onPageChange }) => {
  return (
    <div className="flex items-center justify-center gap-4 mt-8">
      <Button
        variant="outline"
        size="sm"
        disabled={page === 1}
        onClick={() => onPageChange(page - 1)}
      >
        <ChevronLeft size={18} />
        Previous
      </Button>

      <div className="text-sm text-gray-600">
        Page <span className="font-semibold">{page}</span> of{" "}
        <span className="font-semibold">{totalPages || 1}</span>
      </div>

      <Button
        variant="outline"
        size="sm"
        disabled={page >= totalPages}
        onClick={() => onPageChange(page + 1)}
      >
        Next
        <ChevronRight size={18} />
      </Button>
    </div>
  );
};

export default Pagination;
