import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import AdminLayout from "../../components/layout/AdminLayout";
import ArticleTable from "../../components/articles/ArticleTable";
import SearchBar from "../../components/articles/SearchBar";
import StatusFilter from "../../components/articles/StatusFilter";
import Pagination from "../../components/articles/Pagination";
import DeleteModal from "../../components/articles/DeleteModal";
import Button from "../../components/ui/Button";
import EmptyState from "../../components/ui/EmptyState";
import Loader from "../../components/ui/Loader";
import { useArticles } from "../../hooks/useArticles";
import { usePagination } from "../../hooks/usePagination";
import { useDebounce } from "../../hooks/useDebounce";

const ArticlesList = () => {
  const { articles, loading, fetchArticles, deleteArticle } = useArticles();
  const { page, goToPage } = usePagination();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [deleteModal, setDeleteModal] = useState({ isOpen: false, slug: null, title: "" });
  const [deleteLoading, setDeleteLoading] = useState(false);

  const debouncedSearch = useDebounce(searchTerm, 300);

  useEffect(() => {
    fetchArticles({
      page,
      limit: 10,
      search: debouncedSearch,
      status: statusFilter,
    });
  }, [page, debouncedSearch, statusFilter]);

  const handleDeleteClick = (slug, title) => {
    setDeleteModal({ isOpen: true, slug, title });
  };

  const handleDeleteConfirm = async () => {
    setDeleteLoading(true);
    const success = await deleteArticle(deleteModal.slug);
    if (success) {
      setDeleteModal({ isOpen: false, slug: null, title: "" });
      fetchArticles({ page, limit: 10 });
    }
    setDeleteLoading(false);
  };

  return (
    <AdminLayout>
      <div className="mb-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold">Articles</h1>
            <p className="text-gray-500 mt-2">Manage and publish articles</p>
          </div>

          <Link to="/articles/create">
            <Button className="flex items-center gap-2">
              <Plus size={20} />
              New Article
            </Button>
          </Link>
        </div>

        <div className="flex gap-4 mb-6">
          <SearchBar onSearch={setSearchTerm} />
          <StatusFilter value={statusFilter} onChange={setStatusFilter} />
        </div>
      </div>

      {loading ? (
        <Loader />
      ) : articles.length === 0 ? (
        <EmptyState title="No articles found" description="Create your first article to get started" />
      ) : (
        <>
          <ArticleTable articles={articles} onDelete={handleDeleteClick} loading={deleteLoading} />
          <Pagination page={page} totalPages={10} onPageChange={goToPage} />
        </>
      )}

      <DeleteModal
        isOpen={deleteModal.isOpen}
        onClose={() => setDeleteModal({ isOpen: false, slug: null, title: "" })}
        onConfirm={handleDeleteConfirm}
        title={deleteModal.title}
        loading={deleteLoading}
      />
    </AdminLayout>
  );
};

export default ArticlesList;