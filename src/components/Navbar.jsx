import { motion } from "framer-motion";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthContext";

function Navbar() {
  const navLinks = [
    { name: "Home", href: "/", active: true },
    { name: "Doctors", href: "/doctors" }, // Changed to lowercase
    { name: "Services", href: "/services" }, // Changed to lowercase
    { name: "About", href: "/about" }, // Matches your AboutPage route
    { name: "Dashboard", href: "/Dashboard" },
  ];

  const {user}=useContext(AuthContext);

  return (
    <nav className="sticky top-0 z-[100] w-full border-b border-white/5 bg-base-300/60 backdrop-blur-2xl">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-emerald-400 blur-lg opacity-20 group-hover:opacity-40 transition-opacity" />
            <div className="relative w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-400 to-sky-500 flex items-center justify-center text-white font-bold text-xl shadow-lg transform group-hover:rotate-12 transition-transform duration-300">
              +
            </div>
          </div>
          <span className="font-serif text-2xl font-medium tracking-tight text-base-content group-hover:text-emerald-400 transition-colors">
            Medi<span className="italic font-light">Link</span>
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center bg-white/5 border border-white/5 rounded-full px-2 py-1.5 shadow-inner">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              className={({ isActive }) =>
                `relative px-6 py-2 text-sm font-bold transition-all duration-300 rounded-full z-10 ${
                  isActive
                    ? "text-[#032d1d]"
                    : "text-[#7a8a83] hover:text-[#032d1d] hover:bg-white/50"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-[#c6e7d1] border border-[#b5dbbf] rounded-full -z-10 shadow-sm"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                  {link.name}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Auth Actions */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4"
        >
          <NavLink to={`/auth/login`}>
            <button className="hidden sm:inline-flex text-sm font-semibold text-base-content/70 hover:text-emerald-400 transition-colors px-4 py-2">
              Sign In
            </button>
          </NavLink>

          <button className="group relative btn btn-md bg-emerald-500 hover:bg-emerald-400 border-none text-white px-8 rounded-full shadow-lg shadow-emerald-500/10 overflow-hidden">
            <NavLink to={"/auth/signup"}>
              {" "}
              <span className="relative z-10 font-bold">Get Started</span>
            </NavLink>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
          </button>

          {/* Mobile Menu Toggle (DaisyUI Drawer or similar would go here) */}
          <button className="btn btn-ghost btn-circle md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </motion.div>
      </div>
    </nav>
  );
}

export default Navbar;
