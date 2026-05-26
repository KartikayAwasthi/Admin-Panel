import { useState } from "react";
import { useForm } from "react-hook-form";

import { motion } from "framer-motion";

import {
  Mail,
  Lock,
  ArrowRight,
  Eye,
  EyeOff,
  ShieldCheck,
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
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#f8f5f2] via-[#fffaf7] to-[#fdeee7] flex items-center justify-center px-4 py-10">

      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#00000010_1px,transparent_1px),linear-gradient(to_bottom,#00000010_1px,transparent_1px)] bg-[size:48px_48px]" />

      {/* Background Blur */}
      <div className="absolute top-[-120px] left-[-120px] w-[320px] sm:w-[450px] h-[320px] sm:h-[450px] bg-red-200 rounded-full blur-3xl opacity-40"></div>

      <div className="absolute bottom-[-120px] right-[-120px] w-[320px] sm:w-[450px] h-[320px] sm:h-[450px] bg-orange-200 rounded-full blur-3xl opacity-40"></div>

      {/* Login Card */}
      <motion.div
        initial={{
          opacity: 0,
          y: 60,
          scale: 0.95,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.6,
        }}
        className="
          relative
          z-10
          w-full
          max-w-xl
          rounded-[40px]
          border
          border-white/50
          bg-white/70
          backdrop-blur-2xl
          shadow-[0_20px_80px_rgba(0,0,0,0.10)]
          p-6
          sm:p-10
        "
      >

        {/* Logo */}
        <div className="flex flex-col items-center">

          <motion.div
            initial={{
              scale: 0.8,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              delay: 0.2,
            }}
            className="relative"
          >

            <div className="absolute inset-0 bg-red-200 blur-3xl opacity-40 rounded-full"></div>

            <div className="
              relative
              w-28
              h-28
              sm:w-36
              sm:h-36
              rounded-full
              bg-white
              shadow-2xl
              border
              border-gray-200
              flex
              items-center
              justify-center
            ">

              <img
                src="/logo.png"
                alt="logo"
                className="w-20 sm:w-24 object-contain"
              />

            </div>

          </motion.div>

          <h1 className="
            mt-8
            text-5xl
            sm:text-6xl
            font-black
            tracking-tight
            text-[#0f172a]
          ">
            TechPolarity
          </h1>

          <p className="
            text-gray-500
            text-lg
            mt-3
          ">
            Secure Admin Dashboard Access
          </p>

        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 my-8">

          <div className="h-px flex-1 bg-gray-200"></div>

          <div className="
            flex
            items-center
            gap-2
            text-gray-400
            text-sm
            tracking-[6px]
            uppercase
          ">

            <ShieldCheck size={18} />

            Secure Login

          </div>

          <div className="h-px flex-1 bg-gray-200"></div>

        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
        >

          {/* Email */}
          <div className="space-y-3">

            <label className="
              text-lg
              font-semibold
              text-gray-700
            ">
              Email Address
            </label>

            <div className="relative">

              {/* <Mail
                size={24}
                className="
                  absolute
                  left-5
                  top-1/2
                  -translate-y-1/2
                  text-gray-400
                  z-10
                "
              /> */}

              <input
                type="email"
                placeholder="Enter your email"
                {...register("email")}
                className="
                  w-full
                  h-16
                  rounded-2xl
                  border
                  border-gray-200
                  bg-white/80
                  pl-16
                  pr-5
                  text-lg
                  text-gray-900
                  placeholder:text-gray-400
                  outline-none
                  transition-all
                  focus:border-red-400
                  focus:ring-4
                  focus:ring-red-100
                "
              />

            </div>

          </div>

          {/* Password */}
          <div className="space-y-3">

            <label className="
              text-lg
              font-semibold
              text-gray-700
            ">
              Password
            </label>

            <div className="relative">
{/* 
              <Lock
                size={24}
                className="
                  absolute
                  left-5
                  top-1/2
                  -translate-y-1/2
                  text-gray-400
                  z-10
                "
              /> */}

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                placeholder="Enter your password"
                {...register("password")}
                className="
                  w-full
                  h-16
                  rounded-2xl
                  border
                  border-gray-200
                  bg-white/80
                  pl-16
                  pr-16
                  text-lg
                  text-gray-900
                  placeholder:text-gray-400
                  outline-none
                  transition-all
                  focus:border-red-400
                  focus:ring-4
                  focus:ring-red-100
                "
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(
                    !showPassword
                  )
                }
                className="
                  absolute
                  right-5
                  top-1/2
                  -translate-y-1/2
                  text-gray-400
                  hover:text-gray-700
                  transition
                "
              >
                {showPassword ? (
                  <EyeOff size={24} />
                ) : (
                  <Eye size={24} />
                )}
              </button>

            </div>

          </div>

          {/* Remember */}
          <div className="
            flex
            items-center
            justify-between
            flex-wrap
            gap-3
          ">

            <label className="
              flex
              items-center
              gap-3
              text-gray-600
              cursor-pointer
              text-base
            ">

              <input
                type="checkbox"
                className="
                  w-4
                  h-4
                  accent-red-500
                "
              />

              Remember me

            </label>

            <button
              type="button"
              className="
                text-red-500
                hover:text-red-600
                transition
                font-medium
                text-base
              "
            >
              Forgot Password?
            </button>

          </div>

          {/* Button */}
          <motion.button
            whileHover={{
              scale: 1.01,
            }}
            whileTap={{
              scale: 0.98,
            }}
            disabled={loading}
            type="submit"
            className="
              w-full
              h-16
              rounded-2xl
              bg-gradient-to-r
              from-red-500
              to-orange-500
              text-white
              font-bold
              text-2xl
              shadow-lg
              hover:shadow-red-300
              transition-all
              duration-300
              flex
              items-center
              justify-center
              gap-3
              disabled:opacity-70
            "
          >

            {loading
              ? "Logging in..."
              : "Login"}

            {!loading && (
              <ArrowRight size={28} />
            )}

          </motion.button>

        </form>

        {/* Footer */}
        <div className="mt-8 text-center">

          <p className="text-gray-500 text-lg">

            Powered by

            <span className="
              text-red-500
              font-bold
              ml-1
            ">
              TechPolarity
            </span>

          </p>

        </div>

      </motion.div>
    </div>
  );
};

export default Login;