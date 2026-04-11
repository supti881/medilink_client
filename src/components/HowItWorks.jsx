import { motion } from "framer-motion";
import { fadeUp, stagger, steps } from "../AnimationVarients/varients";

function HowItWorks() {
  return (
    <section className="py-32 relative overflow-hidden bg-base-100">
      {/* Background radial glow for the entire section */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(52,211,153,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          variants={stagger}
        >
          {/* Section Header */}
          <motion.div variants={fadeUp} className="text-center mb-24">
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
               <span className="text-xs text-emerald-400 uppercase tracking-[0.3em] font-bold">The Process</span>
            </div>
            <h2 className="font-serif text-4xl md:text-6xl text-base-content font-medium mb-6 tracking-tight">
              Quality care in <span className="italic font-light text-emerald-400">three simple steps</span>
            </h2>
            <p className="text-base-content/50 max-w-xl mx-auto text-lg font-light leading-relaxed">
              We’ve streamlined the medical experience so you can focus on what matters most—your health.
            </p>
          </motion.div>
 
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
            
            {/* Animated Connector Line (Desktop Only) */}
            <div className="hidden md:block absolute top-1/4 left-0 w-full h-[2px] bg-white/[0.03] -z-0">
               <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                className="h-full bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" 
               />
            </div>
 
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                variants={fadeUp}
                custom={i}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                {/* Step Card */}
                <div className="relative z-10 card bg-base-200/30 backdrop-blur-sm border border-white/5 group-hover:border-emerald-500/30 transition-all duration-500 rounded-[2.5rem] overflow-hidden">
                  <div className="card-body p-10">
                    
                    {/* Icon/Number Header */}
                    <div className="flex justify-between items-start mb-8">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-sky-500/20 border border-emerald-500/20 flex items-center justify-center relative overflow-hidden group-hover:scale-110 transition-transform duration-500`}>
                        <span className="text-2xl font-bold font-serif text-emerald-400 z-10">0{i + 1}</span>
                        {/* Inner glow pulse */}
                        <div className="absolute inset-0 bg-emerald-400/10 animate-pulse" />
                      </div>
                      
                      {/* Big decorative number in background */}
                      <div className="font-serif text-8xl font-black text-white/[0.02] absolute -top-4 -right-2 pointer-events-none group-hover:text-emerald-500/5 transition-colors duration-500">
                        {i + 1}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-2xl font-semibold text-base-content tracking-tight">
                        {step.title}
                      </h3>
                      <p className="text-base-content/50 leading-relaxed text-sm lg:text-base font-light">
                        {step.desc}
                      </p>
                    </div>

                    {/* Step specific action hint */}
                    <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-2 text-xs font-bold text-emerald-400/60 uppercase tracking-widest group-hover:text-emerald-400 transition-colors">
                      Learn More
                      <svg xmlns="http://www.w3.org/2000/svg" className="size-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Decorative Bottom Shadow/Glow */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-4/5 h-8 bg-emerald-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA for the process */}
        <motion.div 
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-base-content/40 text-sm mb-6 italic">Ready to experience the future of healthcare?</p>
          <button className="btn btn-outline btn-emerald-400 border-emerald-500/30 hover:bg-emerald-500 hover:text-white rounded-full px-10">
            Start Your Registration
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default HowItWorks;