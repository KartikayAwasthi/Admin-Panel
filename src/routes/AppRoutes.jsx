import { Routes, Route } from "react-router-dom";
import Login from "../pages/auth/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import ArticlesList from "../pages/articles/ArticlesList";
import CreateArticle from "../pages/articles/CreateArticle";
import EditArticle from "../pages/articles/EditArticle";
import ProtectedRoute from "../components/auth/ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/articles"
        element={
          <ProtectedRoute>
            <ArticlesList />
          </ProtectedRoute>
        }
      />

      <Route
        path="/articles/create"
        element={
          <ProtectedRoute>
            <CreateArticle />
          </ProtectedRoute>
        }
      />

      <Route
        path="/articles/edit/:slug"
        element={
          <ProtectedRoute>
            <EditArticle />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;