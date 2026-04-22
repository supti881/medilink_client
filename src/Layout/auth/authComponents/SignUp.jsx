import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Lock,
  Phone,
  Droplet,
  Calendar,
  ArrowRight,
  Camera,
} from "lucide-react";
import { AuthContext } from "../../../AuthContext/AuthContext";

const SignUp = () => {
  const { SignUpWithEmailPassword, UpdateUser, user } = useContext(AuthContext);
  console.log("Current User in SignUp:", user);
  // 1. Unified State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    age: "",
    bloodGroup: "A+",
    photo: null,
  });

  const [preview, setPreview] = useState(null);

  // 2. Handlers
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoto = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, photo: file }));
      setPreview(URL.createObjectURL(file)); // For UI preview
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Saving to Database...", formData);
    alert("Profile Created! Check Console.");
    const res = await SignUpWithEmailPassword(
      formData.email,
      formData.password,
    );
    console.log("firebase response", res);
    const User = res?.user;

    await UpdateUser({
      displayName: formData.name,
      photoURL: formData.photo ? URL.createObjectURL(formData.photo) : null,
    });
    //  console.log("firebase update response", updateRes)

    await fetch("http://localhost:5000/api/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: User.displayName || "No Name",
        email: User.email,
        role: "patient",
      }),
    });

    console.log(res);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 font-sans">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-2xl bg-white rounded-[2.5rem] shadow-2xl shadow-emerald-200/50 overflow-hidden border border-emerald-100"
      >
        <div className="p-8 md:p-12">
          {/* Header */}
          <header className="mb-10 text-center">
            <h2 className="text-3xl font-black text-slate-800 tracking-tight">
              Health Pass
            </h2>
            <p className="text-slate-500 mt-2">
              Complete your medical digital identity
            </p>
          </header>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Profile Picture Upload */}
            <div className="flex justify-center mb-8">
              <label className="relative group cursor-pointer">
                <div className="w-24 h-24 rounded-3xl bg-emerald-50 border-2 border-dashed border-emerald-200 flex items-center justify-center overflow-hidden group-hover:border-emerald-400 transition-all">
                  {preview ? (
                    <img
                      src={preview}
                      alt="User"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Camera
                      className="text-emerald-400 group-hover:scale-110 transition-transform"
                      size={28}
                    />
                  )}
                </div>
                <input
                  type="file"
                  className="hidden"
                  onChange={handlePhoto}
                  accept="image/*"
                />
                <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-white p-1.5 rounded-lg shadow-lg">
                  <ArrowRight size={14} className="-rotate-45" />
                </div>
              </label>
            </div>

            {/* Form Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <CustomInput
                label="Full Name"
                name="name"
                icon={User}
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
              />
              <CustomInput
                label="Email"
                name="email"
                type="email"
                icon={Mail}
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
              />
              <CustomInput
                label="Phone"
                name="phone"
                type="tel"
                icon={Phone}
                placeholder="+1 234..."
                value={formData.phone}
                onChange={handleChange}
              />
              <CustomInput
                label="Password"
                name="password"
                type="password"
                icon={Lock}
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
              />

              {/* Age Field */}
              <CustomInput
                label="Age"
                name="age"
                type="number"
                icon={Calendar}
                placeholder="25"
                value={formData.age}
                onChange={handleChange}
              />

              {/* Blood Group Select */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-slate-400 uppercase ml-1">
                  Blood Type
                </label>
                <div className="relative">
                  <Droplet
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-500"
                    size={18}
                  />
                  <select
                    name="bloodGroup"
                    value={formData.bloodGroup}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none appearance-none transition-all font-medium text-slate-700"
                  >
                    {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map(
                      (type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ),
                    )}
                  </select>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-slate-900 hover:bg-emerald-600 text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-emerald-200 transition-colors flex items-center justify-center gap-3 mt-4"
            >
              Securely Save Profile
              <ArrowRight size={20} />
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

// Reusable Helper Component
const CustomInput = ({ label, ...props }) => (
  <div className="flex flex-col gap-2">
    <label className="text-xs font-bold text-slate-400 uppercase ml-1 tracking-wide">
      {label}
    </label>
    <div className="relative group">
      <Icon
        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-500 transition-colors"
        size={18}
      />
      <input
        {...props}
        className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all text-slate-700 placeholder:text-slate-300"
      />
    </div>
  </div>
);

export default SignUp;
