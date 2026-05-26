import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/auth/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import ArticlesList from "../pages/articles/ArticlesList";
import CreateArticle from "../pages/articles/CreateArticle";
import EditArticle from "../pages/articles/EditArticle";
import ArticlePreview from "../pages/articles/ArticlePreview";

import AdminLayout from "../components/layout/AdminLayout";
import ProtectedRoute from "../components/auth/ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="/dashboard" />} />

        <Route path="dashboard" element={<Dashboard />} />

        <Route path="articles" element={<ArticlesList />} />

        <Route path="articles/create" element={<CreateArticle />} />

        <Route path="articles/edit/:slug" element={<EditArticle />} />

        <Route
          path="articles/preview/:slug"
          element={<ArticlePreview />}
        />
      </Route>
    </Routes>
  );
};

export default AppRoutes;