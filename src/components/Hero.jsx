import { motion } from "framer-motion";
import { fadeUp, stagger } from "../AnimationVarients/Varients"

function Hero() {
  return (
    <section className="bg-base-100 py-32 md:py-32 dark:bg-black dark:text-white  overflow-hidden relative">
      <div className="absolute inset-0 bg-base-200/50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative">
        {/* Left - Hero Content */}
        <motion.div initial="hidden" animate="visible" variants={stagger} className="z-10 text-center lg:text-left">
          <motion.div variants={fadeUp} className="inline-flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/25 rounded-full px-6 py-2.5 text-sm font-medium text-emerald-400 mb-8 shadow-inner">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span>Available 24/7 · 500+ Verified Doctors</span>
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-6xl md:text-7xl xl:text-8xl font-serif font-black leading-[1.05] mb-6 text-base-content tracking-tighter">
            Healthcare, <br className="hidden md:block" /> 
            <span className="italic bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent">
              at your speed.
            </span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-base-content/70 text-xl leading-relaxed mb-12 max-w-2xl mx-auto lg:mx-0 font-light">
            Skip the waiting room. Instantly connect with certified physicians, receive expert care, and get prescriptions – all from the comfort and safety of your own home, within minutes.
          </motion.p>

          <motion.div variants={fadeUp} className="flex gap-6 justify-center lg:justify-start flex-wrap">
            <button className="btn btn-lg bg-emerald-500 hover:bg-emerald-600 text-white font-bold border-none px-10 gap-2.5 rounded-full shadow-lg transform transition hover:scale-105">
              Book Consultation
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" /></svg>
            </button>
            <button className="btn btn-lg btn-ghost gap-3.5 group rounded-full text-base-content hover:bg-white/5">
              <span className="w-12 h-12 rounded-full bg-emerald-500/15 flex items-center justify-center transition group-hover:bg-emerald-500/25">
                <svg className="w-5 h-5 fill-emerald-400" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
              </span>
              Watch Demo
            </button>
          </motion.div>

          <motion.div variants={fadeUp} className="flex gap-12 mt-20 pt-10 border-t border-base-content/10 justify-center lg:justify-start">
            {[["100K+", "Patients Helped"], ["800+", "Specialists"], ["99.1%", "Satisfaction"]].map(([num, label]) => (
              <div key={label} className="text-center lg:text-left">
                <div className="text-4xl font-extrabold text-base-content tracking-tight">{num}</div>
                <div className="text-sm font-medium text-base-content/50 mt-1.5 uppercase tracking-wide">{label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — Interactive UI Mockup */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }} // smooth ease-out-quint
          className="relative perspective-1000 lg:mt-0 mt-16"
        >
            {/* Background Glow */}
            <div className="absolute -inset-10 bg-gradient-to-r from-emerald-500/20 to-sky-500/20 rounded-[30px] blur-3xl -z-10" />

          <div className="card bg-base-100/50 border border-base-content/5 shadow-2xl backdrop-blur-md rounded-3xl overflow-hidden rotate-x-6 rotate-y--10 group hover:rotate-x-0 hover:rotate-y-0 transition-transform duration-500 ease-out">
            <div className="card-body p-8 gap-6">
              {/* Doctor Status Card */}
              <div className="bg-gradient-to-br from-emerald-500/20 to-sky-500/20 rounded-2xl p-6 border border-emerald-500/10 shadow-inner">
                <div className="flex items-center gap-4 mb-5">
                  <div className="avatar indicator">
                    <span className="indicator-item badge badge-success size-3 p-0 rounded-full border-2 border-base-100"></span> 
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-sky-500 text-white flex items-center justify-center text-3xl font-bold shadow-md">
                      <span>SM</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-xl font-semibold text-base-content">Dr. Sarah Mitchell</div>
                    <div className="text-sm font-medium text-emerald-400">Cardiologist & General Physician</div>
                  </div>
                   <button className="btn btn-sm btn-outline btn-success rounded-full ml-auto gap-1.5 px-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4" viewBox="0 0 20 20" fill="currentColor"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                    Call
                  </button>
                </div>
                <div className="bg-base-200/60 rounded-xl p-5 border border-base-content/5">
                  <div className="text-xs font-semibold text-base-content/50 mb-2.5 uppercase tracking-wider">Next available slots</div>
                  <div className="flex gap-3 flex-wrap">
                    {["Today, 3:30 PM", "Today, 4:00 PM", "Today, 5:30 PM", "Tomorrow, 9:00 AM"].map((t) => (
                      <span key={t} className="badge badge-md font-medium bg-emerald-500/15 border-emerald-500/25 text-emerald-400 rounded-full px-4 py-3">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Patient Vitals */}
              <div className="grid grid-cols-2 gap-5">
                <div className="bg-base-200/40 border border-base-content/5 rounded-2xl p-5 shadow-inner transition hover:border-red-500/30">
                  <div className="text-sm font-medium text-base-content/60 flex items-center gap-1.5"><svg xmlns="http://www.w3.org/2000/svg" className="size-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>Heart Rate</div>
                  <div className="text-4xl font-bold text-red-400 mt-2.5">72 <span className="text-xl text-base-content/50 font-medium">bpm</span></div>
                  <svg className="mt-4" viewBox="0 0 80 28" width="100%" height="32">
                    <polyline points="0,14 8,14 12,4 16,24 20,4 24,24 28,14 40,14 44,4 48,24 52,14 60,14 64,6 68,22 72,14 80,14" fill="none" stroke="#f87171" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="bg-base-200/40 border border-base-content/5 rounded-2xl p-5 shadow-inner transition hover:border-sky-500/30">
                   <div className="text-sm font-medium text-base-content/60 flex items-center gap-1.5"><svg xmlns="http://www.w3.org/2000/svg" className="size-4 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>Blood Pressure</div>
                  <div className="text-4xl font-bold text-sky-400 mt-2.5">120 <span className="text-xl text-base-content/50 font-medium">/80</span></div>
                  <div className="inline-flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold rounded-full px-3 py-1 mt-4">
                    <span className="size-2 bg-emerald-400 rounded-full"></span>Normal Range
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating Wait Time Badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -top-6 -right-8 bg-sky-500/20 border-2 border-sky-500/30 rounded-2xl p-5 backdrop-blur-lg shadow-xl z-20 group-hover:scale-110 transition-transform duration-300"
          >
            <div className="text-sm font-semibold text-sky-200/90 uppercase tracking-wider">Avg Wait Time</div>
            <div className="text-3xl font-black text-white mt-1 tracking-tight">~4 min</div>
          </motion.div>
          
           {/* Secondary floating element (decorative) */}
            <motion.div 
                 animate={{ y: [0, 8, 0], x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-10 -left-12 size-20 bg-emerald-500/10 rounded-full blur-2xl -z-10"
            />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;