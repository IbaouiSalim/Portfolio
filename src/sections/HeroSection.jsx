import React, { memo } from 'react';
import { Github, Linkedin } from 'lucide-react';
import ThreeBackground from "../components/ThreeBackground";
import { SOCIAL_LINKS } from '../data/portfolio';

const HeroSection = memo(({ onScrollTo }) => (
  <section id="home" className="relative min-h-screen flex items-center justify-center px-8 overflow-hidden">
    <ThreeBackground isLoaded={true} />
    
    <div className="relative z-10 max-w-5xl text-center">
      <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-indigo-500/5 border border-indigo-500/10 text-indigo-400 text-[10px] font-black tracking-widest mb-10 animate-fade-in">
        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
        COMPUTER ENGINEERING @ FH AACHEN
      </div>
      
      <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter mb-10 leading-none animate-fade-in-delay-1">
        Architecting <br/>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-indigo-500 to-violet-600">
          Digital Systems.
        </span>
      </h1>
      
      <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-14 font-medium leading-relaxed animate-fade-in-delay-2">
        I build robust, system-oriented applications with a focus on algorithms, security, and high-fidelity user experiences.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-5 justify-center items-center animate-fade-in-delay-3">
        <button 
          onClick={() => onScrollTo('projects')}
          className="px-10 py-5 rounded-2xl bg-indigo-600 text-white font-bold text-sm hover:bg-indigo-500 transition-all shadow-2xl shadow-indigo-500/20 w-full sm:w-auto"
        >
          Explore Projects
        </button>
        <div className="flex gap-3">
          <a 
            href={SOCIAL_LINKS.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-indigo-500/30 transition-colors text-white"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a 
            href={SOCIAL_LINKS.linkedin}
            target="_blank" 
            rel="noopener noreferrer"
            className="p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-indigo-500/30 transition-colors text-white"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </div>
  </section>
));

HeroSection.displayName = 'HeroSection';

export default HeroSection;
