import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, ArrowRight, Leaf, ShieldCheck } from "lucide-react";

import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../AuthContext/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { SignIn } = useContext(AuthContext);

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (field, value) => {
    setData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(data);
    SignIn(data?.email, data?.password)
      .then((res) => {
        console.log(res?.user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error); // fixed error handling
      });
  };

  return (
    <div className="min-h-screen bg-[#F0FDF4] flex items-center justify-center p-6 relative overflow-hidden font-sans">
      {/* Background */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], x: [0, 30, 0], y: [0, -30, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute w-[600px] h-[600px] bg-emerald-200/40 rounded-full blur-[120px] -z-10 top-[-10%] left-[-10%]"
      />

      <motion.div
        animate={{ scale: [1.1, 1, 1.1], x: [0, -40, 0], y: [0, 40, 0] }}
        transition={{ duration: 25, repeat: Infinity }}
        className="absolute w-[500px] h-[500px] bg-teal-200/30 rounded-full blur-[100px] -z-10 bottom-[-10%] right-[-10%]"
      />

      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex p-4 bg-emerald-600 rounded-[2rem] shadow-xl mb-4">
            <Leaf size={32} className="text-white" />
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900">
            Welcome Back
          </h1>
          <p className="text-slate-500 mt-2">
            Secure access to your medical portal
          </p>
        </div>

        {/* Card */}
        <div className="bg-white/70 backdrop-blur-3xl p-10 rounded-[3rem] shadow-xl">
          <form onSubmit={handleLogin} className="space-y-6">
            {/* Email */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-emerald-800 uppercase tracking-widest">
                Email Address
              </label>
              <div className="relative">
                <Mail
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-400"
                  size={20}
                />
                <input
                  type="email"
                  value={data.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder="name@company.com"
                  className="w-full pl-12 p-4 bg-white/50 border border-emerald-100 rounded-2xl focus:bg-white outline-none"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-emerald-800 uppercase tracking-widest">
                Password
              </label>
              <div className="relative">
                <Lock
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-400"
                  size={20}
                />
                <input
                  type="password"
                  value={data.password}
                  onChange={(e) => handleChange("password", e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-12 p-4 bg-white/50 border border-emerald-100 rounded-2xl focus:bg-white outline-none"
                />
              </div>
            </div>

            {/* Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-emerald-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2"
            >
              Sign In
              <ArrowRight size={20} />
            </motion.button>

            {/* Google */}
            <button
              type="button"
              className="w-full mt-3 text-emerald-600 font-bold"
            >
              Google login
            </button>
          </form>

          {/* Security */}
          <div className="mt-6 pt-6 border-t flex items-center justify-center gap-2 text-emerald-600/60">
            <ShieldCheck size={16} />
            <span className="text-xs font-bold">HIPAA Secure Connection</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
