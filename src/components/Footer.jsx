import { motion } from "framer-motion";

function Footer() {
  const footerLinks = {
    Company: ["About Us", "Careers", "Press Kit", "Contact"],
    Services: ["Emergency Care", "Mental Health", "Pediatrics", "Cardiology"],
    Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "HIPAA Compliance"],
  };

  return (
    // Replaced <section> with <footer> for better SEO and accessibility
    <footer className="relative overflow-hidden border-t border-white/5 bg-base-300/30 pt-20 pb-10">
      
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-gradient-to-t from-emerald-500/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-20">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400 to-sky-500 flex items-center justify-center text-white font-bold shadow-lg shadow-emerald-500/10">
                +
              </div>
              <span className="font-serif text-2xl tracking-tight text-base-content">
                Medi<span className="italic font-light">Link</span>
              </span>
            </div>
            <p className="text-base-content/40 text-sm leading-relaxed max-w-xs">
              Revolutionizing healthcare access through instant, secure, and expert digital consultations. Available whenever you need us.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-4">
              {[1, 2, 3, 4].map((i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ y: -3, backgroundColor: "rgba(52, 211, 153, 0.1)" }}
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center hover:border-emerald-500/30 transition-all cursor-pointer"
                >
                  <div className="w-3 h-3 bg-base-content/20 rounded-full" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Links Columns Mapping */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="lg:col-span-1">
              <h4 className="font-serif text-lg text-base-content mb-6">{title}</h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-sm text-base-content/40 hover:text-emerald-400 transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* System Status Column */}
          <div className="lg:col-span-1">
            <h4 className="font-serif text-lg text-base-content mb-6">System Status</h4>
            <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-2xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Live Status</span>
              </div>
              <p className="text-[10px] text-base-content/30 leading-snug font-medium">
                Our medical network is currently at peak efficiency. Avg response: 4m.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar Area */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[11px] text-base-content/30 font-medium uppercase tracking-widest">
            © 2026 MediLink Health Inc. <span className="mx-2">|</span> Engineered with Care
          </div>
          
          <div className="flex items-center gap-6">
            {/* Stacked User Avatars Effect */}
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-6 h-6 rounded-full border-2 border-base-300 bg-base-200" />
              ))}
            </div>
            <span className="text-[11px] text-base-content/30 font-bold uppercase tracking-widest">
              Trusted by 50k+ Patients
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;