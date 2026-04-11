import { motion } from "framer-motion";

function TestimonialAndCTA() {
  return (
    <section className="py-32 max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Testimonial Card - Spans 7 columns */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7 group relative card bg-base-200/40 backdrop-blur-md border border-white/5 overflow-hidden rounded-[3rem]"
        >
          {/* Animated Quote Icon background */}
          <div className="absolute -top-10 -left-10 font-serif text-[15rem] text-emerald-500/5 leading-none pointer-events-none group-hover:text-emerald-500/10 transition-colors duration-700">
            “
          </div>

          <div className="card-body p-10 md:p-14 justify-between relative z-10">
            <div>
              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="font-serif text-2xl md:text-3xl text-base-content leading-[1.4] italic mb-12">
                "I had a severe allergic reaction at midnight. Within <span className="text-emerald-400 font-semibold not-italic">6 minutes</span> I was speaking with Dr. Nair. This service is genuinely lifesaving."
              </p>
            </div>

            <div className="flex items-center gap-4 border-t border-white/5 pt-8">
              <div className="avatar">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-400 to-sky-500 p-[2px]">
                  <div className="flex h-full w-full items-center justify-center rounded-2xl bg-base-300">
                    <span className="text-lg font-bold bg-gradient-to-br from-emerald-400 to-sky-500 bg-clip-text text-transparent">RK</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="text-lg font-bold text-base-content">Rania Khalil</div>
                <div className="text-sm font-medium text-base-content/40 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  Verified Patient · Dubai, UAE
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Card - Spans 5 columns */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 relative card bg-emerald-500 overflow-hidden rounded-[3rem] shadow-2xl shadow-emerald-500/20"
        >
          {/* Decorative Mesh Gradient Overlays */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_-20%,rgba(255,255,255,0.3),transparent)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_120%,rgba(0,0,0,0.2),transparent)]" />

          <div className="card-body p-10 md:p-14 justify-between relative z-10 text-emerald-950">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-medium leading-[1.1] mb-6">
                Ready to take control?
              </h2>
              <p className="text-emerald-900/70 text-lg leading-relaxed font-medium mb-8">
                Join 50,000+ patients who get fast, private healthcare every single day.
              </p>
            </div>

            <div className="space-y-6">
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="btn btn-lg w-full bg-emerald-950 hover:bg-black text-white border-none rounded-2xl shadow-xl flex items-center justify-between px-8"
              >
                <span className="font-bold text-lg">Book Consultation</span>
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.button>

              <div className="grid grid-cols-1 gap-3">
                {[
                  "HIPAA & GDPR Compliant",
                  "End-to-end Encrypted",
                  "No Hidden Fees"
                ].map((text) => (
                  <div key={text} className="flex items-center gap-2 text-sm font-bold opacity-60">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}

export default TestimonialAndCTA;