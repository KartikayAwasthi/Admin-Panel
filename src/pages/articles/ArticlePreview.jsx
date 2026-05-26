import AdminLayout from "../../components/layout/AdminLayout";
import { ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/ui/Button";

const ArticlePreview = () => {
  const navigate = useNavigate();
  const { slug } = useParams();

  return (
    <AdminLayout>
      <Button onClick={() => navigate(-1)} variant="outline" className="mb-6">
        <ArrowLeft size={18} />
        Back
      </Button>

      <div className="bg-white rounded-xl p-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Article Title Here</h1>
          <p className="text-gray-500 text-lg mb-8">Article description goes here</p>

          <div className="prose prose-lg max-w-none">
            <p>Article content will be displayed here...</p>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default ArticlePreview;
