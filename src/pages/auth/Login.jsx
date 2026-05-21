import { useState } from "react";
import { useForm } from "react-hook-form";

import { motion } from "framer-motion";

import {
  Mail,
  Lock,
  ArrowRight,
  Eye,
  EyeOff,
} from "lucide-react";

import { loginAdmin } from "../../api/authApi";

import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

const Login = () => {
  const { register, handleSubmit } =
    useForm();

  const navigate = useNavigate();

  const [showPassword, setShowPassword] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const res = await loginAdmin(data);

      localStorage.setItem(
        "token",
        res.data.access_token
      );

      toast.success("Login Successful");

      navigate("/");
    } catch (error) {
      toast.error("Invalid Credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-orange-50 to-red-50 flex items-center justify-center px-4 relative overflow-hidden">

      {/* Background Blur */}
      <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-red-200 rounded-full blur-3xl opacity-40"></div>

      <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-orange-200 rounded-full blur-3xl opacity-40"></div>

      {/* Card */}
      <motion.div
        initial={{
          opacity: 0,
          y: 80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
        }}
        className="w-full max-w-md bg-white/90 backdrop-blur-xl rounded-[32px] shadow-2xl border border-gray-200 p-10 relative z-10"
      >

        {/* Logo */}
        <div className="flex flex-col items-center mb-10">

          <div className="w-32 h-32 rounded-full bg-white shadow-xl border border-gray-200 flex items-center justify-center">

            <img
              src="/logo.png"
              alt="logo"
              className="w-24 object-contain"
            />

          </div>

          <h1 className="mt-6 text-4xl font-black text-gray-900 tracking-tight">
            TechPolarity
          </h1>

          <p className="text-gray-500 text-sm mt-2">
            Admin Dashboard Login
          </p>

        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
        >

          {/* Email */}
          <div className="relative">

            <Mail
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-black"
            />

            <input
              type="email"
              placeholder="Enter your email"
              {...register("email")}
              className="w-full h-14 pl-12 pr-4 rounded-xl border border-gray-300 bg-white text-black placeholder:text-gray-500 outline-none focus:border-red-500 focus:ring-4 focus:ring-red-100 transition-all"
            />

          </div>

          {/* Password */}
          <div className="relative">

            <Lock
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-black"
            />

            <input
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              placeholder="Enter your password"
              {...register("password")}
              className="w-full h-14 pl-12 pr-14 rounded-xl border border-gray-300 bg-white text-black placeholder:text-gray-500 outline-none focus:border-red-500 focus:ring-4 focus:ring-red-100 transition-all"
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(
                  !showPassword
                )
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black transition"
            >
              {showPassword ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>

          </div>

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between">

            <label className="flex items-center gap-2 text-sm text-gray-600">

              <input
                type="checkbox"
                className="accent-red-500"
              />

              Remember me

            </label>

            <button
              type="button"
              className="text-sm text-red-500 hover:underline"
            >
              Forgot Password?
            </button>

          </div>

          {/* Login Button */}
          <motion.button
            whileHover={{
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.98,
            }}
            disabled={loading}
            className="w-full h-14 rounded-xl bg-red-500 text-white font-bold text-lg shadow-lg hover:shadow-red-300 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70"
          >

            {loading
              ? "Logging in..."
              : "Login"}

            {!loading && (
              <ArrowRight size={20} />
            )}

          </motion.button>

        </form>

        {/* Footer */}
        <div className="mt-8 text-center">

          <p className="text-sm text-gray-500">

            Powered by

            <span className="text-red-500 font-semibold ml-1">
              TechPolarity
            </span>

          </p>

        </div>

      </motion.div>
    </div>
  );
};

export default Login;