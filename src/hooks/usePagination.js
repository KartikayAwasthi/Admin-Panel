import { useState, useCallback } from "react";

export const usePagination = (initialPage = 1, pageSize = 10) => {
  const [page, setPage] = useState(initialPage);

  const goToPage = useCallback((pageNum) => {
    setPage(Math.max(1, pageNum));
  }, []);

  const nextPage = useCallback(() => {
    setPage((p) => p + 1);
  }, []);

  const prevPage = useCallback(() => {
    setPage((p) => Math.max(1, p - 1));
  }, []);

  return { page, setPage, goToPage, nextPage, prevPage, pageSize };
};
