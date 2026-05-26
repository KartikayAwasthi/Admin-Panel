import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../services/authService";
import { showSuccess, showError } from "../utils/toast";

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const login = useCallback(
    async (credentials) => {
      try {
        setLoading(true);
        const res = await authService.login(credentials);
        authService.setToken(res.data.access_token);
        showSuccess("Login successful!");
        navigate("/");
        return true;
      } catch (error) {
        showError(error.response?.data?.message || "Login failed");
        return false;
      } finally {
        setLoading(false);
      }
    },
    [navigate]
  );

  const logout = useCallback(() => {
    authService.logout();
    navigate("/login");
  }, [navigate]);

  return { login, logout, loading, isAuthenticated: authService.isAuthenticated() };
};
