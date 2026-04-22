import { motion } from "framer-motion";
import { fadeUp, stagger, specialties } from "../AnimationVarients/varients";

function Specialties() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          {/* Header Section */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
          >
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-[0.2em] mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Our Expertise
              </div>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-base-content font-normal leading-tight">
                Specialized care for <br />
                <span className="italic text-base-content/60 font-light">
                  every stage of life.
                </span>
              </h2>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-ghost text-emerald-400 hover:bg-emerald-500/5 border border-white/5 rounded-2xl px-8"
            >
              View All 24+ Specialties
            </motion.button>
          </motion.div>

          {/* Grid Layout */}
          <motion.div
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5"
          >
            {specialties.map((s) => (
              <motion.div
                key={s.label}
                variants={fadeUp}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className="group relative"
              >
                {/* Hover Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-b from-emerald-500/20 to-sky-500/20 rounded-[2rem] opacity-0 group-hover:opacity-100 blur transition duration-500" />

                <div className="relative card h-full bg-base-200/40 backdrop-blur-md border border-white/5 group-hover:border-emerald-500/30 transition-colors duration-500 rounded-[2rem] overflow-hidden">
                  <div className="card-body items-center text-center p-8">
                    {/* Icon Container */}
                    <div className="relative size-16 mb-4 flex items-center justify-center">
                      <div className="absolute inset-0 bg-emerald-500/10 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-white/5 rounded-2xl -rotate-3 group-hover:rotate-0 transition-transform duration-500" />
                      <span className="relative text-4xl transform group-hover:scale-110 transition-transform duration-500 ease-out">
                        {s.icon}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold text-base-content group-hover:text-emerald-400 transition-colors">
                        {s.label}
                      </h3>
                      <p className="text-xs font-medium text-base-content/40 group-hover:text-base-content/60 transition-colors tracking-wide uppercase">
                        {s.count} Specialists
                      </p>
                    </div>

                    {/* Subtle "Arrow" hint that appears on hover */}
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="size-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </div>
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

export default Specialties;
