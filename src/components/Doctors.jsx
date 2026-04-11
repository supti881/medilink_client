import { motion } from "framer-motion";
import { fadeUp, stagger, doctors } from "../AnimationVarients/varients";

function Doctors() {
  return (
    <section className="py-32 relative overflow-hidden bg-base-100">
      {/* Background Accent */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-sky-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          variants={stagger}
        >
          {/* Header Area */}
          <motion.div variants={fadeUp} className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6 mb-20 text-center md:text-left">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
                Our Medical Board
              </div>
              <h2 className="font-serif text-4xl md:text-6xl font-medium text-base-content leading-tight">
                Connect with <br />
                <span className="italic text-emerald-400 font-light">top-rated specialists.</span>
              </h2>
            </div>
            
            <motion.a 
              href="#" 
              whileHover={{ x: 5 }}
              className="group btn btn-ghost rounded-2xl border border-white/5 bg-white/[0.02] px-8 text-base-content/60 hover:text-emerald-400"
            >
              Explore All Doctors
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>

          {/* Doctors Grid */}
          <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {doctors.map((doc, i) => (
              <motion.div
                key={doc.name}
                variants={fadeUp}
                custom={i}
                whileHover={{ y: -12 }}
                className="group relative"
              >
                {/* Background Shadow/Glow Effect */}
                <div className="absolute inset-x-4 bottom-0 h-1/2 bg-gradient-to-t from-emerald-500/10 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative card bg-base-200/40 backdrop-blur-md border border-white/5 group-hover:border-emerald-500/30 transition-all duration-500 rounded-[2.5rem] overflow-hidden">
                  <div className="card-body p-8">
                    {/* Top Section: Avatar & Status */}
                    <div className="flex justify-between items-start mb-6">
                      <div className="relative">
                        <div className={`absolute inset-0 bg-gradient-to-br ${doc.gradient} blur-lg opacity-20 group-hover:opacity-40 transition-opacity`} />
                        <div className={`relative avatar placeholder`}>
                          <div className={`bg-gradient-to-br ${doc.gradient} text-base-300 rounded-2xl w-20 h-20 shadow-xl transform group-hover:scale-105 group-hover:-rotate-3 transition-transform duration-500`}>
                            <span className="font-bold font-serif text-2xl tracking-tighter">{doc.initials}</span>
                          </div>
                        </div>
                        {/* Live Status Indicator */}
                        {doc.status === "Online" && (
                          <div className="absolute -bottom-1 -right-1 flex h-4 w-4">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-base-200"></span>
                          </div>
                        )}
                      </div>

                      <div className="flex flex-col items-end gap-2">
                        <span className={`badge badge-sm font-bold uppercase tracking-tighter ${doc.status === "Online" ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400" : "bg-white/5 border-white/10 text-base-content/30"}`}>
                          {doc.status}
                        </span>
                        <div className="flex items-center gap-1 text-yellow-500 font-bold text-sm">
                          ★ <span className="text-base-content">{doc.rating}</span>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="space-y-1 mb-6">
                      <h3 className="text-xl font-bold text-base-content group-hover:text-emerald-400 transition-colors duration-300">
                        {doc.name}
                      </h3>
                      <p className="text-sm font-medium text-base-content/40 tracking-wide uppercase">
                        {doc.specialty}
                      </p>
                    </div>

                    {/* Footer Info */}
                    <div className="flex justify-between items-center pt-5 border-t border-white/5">
                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase font-bold text-base-content/30 tracking-widest">Rate</span>
                        <span className="text-lg font-bold text-base-content tracking-tighter">${doc.price}<span className="text-xs font-normal opacity-40">/hr</span></span>
                      </div>
                      
                      {/* Action Button: Revealed on Hover */}
                      <button className="btn btn-sm btn-circle bg-emerald-500 hover:bg-emerald-400 border-none text-white shadow-lg shadow-emerald-500/20 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Doctors;