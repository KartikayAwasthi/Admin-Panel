import ArticleTable from '../../components/articles/ArticleTable';
import SearchBar from '../../components/articles/SearchBar';
import StatusFilter from '../../components/articles/StatusFilter';

const ArticlesList = () => {
  return (
    <div className="space-y-5">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Articles</h1>
      </div>

      <div className="flex gap-4">
        <SearchBar />
        <StatusFilter />
      </div>

      <ArticleTable />
    </div>
  );
};

export default ArticlesList;