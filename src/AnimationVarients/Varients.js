import { motion } from "framer-motion";
 
// ─── Animation Variants ────────────────────────────────────────────────────
export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};
 
export const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
 
// ─── Data ──────────────────────────────────────────────────────────────────
export const specialties = [
  { icon: "🫀", label: "Cardiology", count: 48 },
  { icon: "🧠", label: "Neurology", count: 32 },
  { icon: "🦷", label: "Dentistry", count: 61 },
  { icon: "🧬", label: "Dermatology", count: 29 },
  { icon: "🧘", label: "Mental Health", count: 55 },
  { icon: "👶", label: "Pediatrics", count: 44 },
];
 
export const steps = [
  {
    num: "01",
    title: "Create Your Profile",
    desc: "Sign up and share your medical history securely. Your data is encrypted and HIPAA-compliant.",
    color: "text-emerald-400",
    border: "border-emerald-500/30",
    bg: "bg-emerald-500/10",
  },
  {
    num: "02",
    title: "Choose Your Doctor",
    desc: "Browse verified specialists by specialty, rating, or availability. Read reviews and book instantly.",
    color: "text-sky-400",
    border: "border-sky-500/30",
    bg: "bg-sky-500/10",
  },
  {
    num: "03",
    title: "Start Consultation",
    desc: "Join a secure video call, get diagnosed, and receive your prescription — all in one session.",
    color: "text-violet-400",
    border: "border-violet-500/30",
    bg: "bg-violet-500/10",
  },
];
 
export const doctors = [
  { initials: "SM", name: "Dr. Sarah Mitchell", specialty: "Cardiologist", rating: 4.9, reviews: 218, price: 45, status: "Online", gradient: "from-emerald-400 to-sky-500" },
  { initials: "JK", name: "Dr. James Kwon", specialty: "Neurologist", rating: 4.8, reviews: 142, price: 60, status: "Online", gradient: "from-violet-500 to-indigo-500" },
  { initials: "PN", name: "Dr. Priya Nair", specialty: "Dermatologist", rating: 4.9, reviews: 307, price: 40, status: "Busy", gradient: "from-amber-400 to-red-500" },
  { initials: "LR", name: "Dr. Leo Rodriguez", specialty: "Pediatrician", rating: 4.7, reviews: 189, price: 35, status: "Online", gradient: "from-sky-400 to-emerald-400" },
];