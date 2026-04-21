import React, { memo } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/portfolio';

const FooterSection = memo(() => (
  <footer className="py-32 px-8 border-t border-white/5">
    <div className="max-w-6xl mx-auto">
      <div className="bg-gradient-to-br from-indigo-600 to-violet-700 rounded-[3rem] p-12 md:p-20 relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="relative z-10 text-center md:text-left">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
            Ready for the <br/>next challenge.
          </h2>
          <p className="text-indigo-100 font-medium text-lg max-w-md">
            Currently looking for an internship opportunity in Informatik/Engineering.
          </p>
        </div>
        
        <div className="relative z-10 flex flex-col gap-4 w-full md:w-auto">
          <a 
            href={`mailto:${SOCIAL_LINKS.email}`}
            className="flex items-center justify-between gap-10 px-8 py-6 rounded-2xl bg-white text-black font-black hover:scale-105 transition-all shadow-xl"
          >
            <span>{SOCIAL_LINKS.email}</span>
            <Mail size={20} />
          </a>
          <div className="flex justify-center md:justify-end gap-3 pt-4">
            <a 
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-black/20 text-white hover:bg-black/40 transition-all"
              aria-label="GitHub"
            >
              <Github size={20}/>
            </a>
            <a 
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-black/20 text-white hover:bg-black/40 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={20}/>
            </a>
          </div>
        </div>
        
        {/* Visual Flair */}
        <div className="absolute top-[-20%] right-[-10%] w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      </div>
      
      <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em]">
        <p>© 2024-2025 MOHAMED SALIM IBAOUI</p>
        <p>JÜLICH, GERMANY — FH AACHEN</p>
      </div>
    </div>
  </footer>
));

FooterSection.displayName = 'FooterSection';

export default FooterSection;
