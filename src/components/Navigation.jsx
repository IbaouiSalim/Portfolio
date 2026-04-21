import React, { memo } from 'react';
import { Mail } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/portfolio';

const Navigation = memo(({ scrolled, activeSection, onScrollTo }) => (
  <nav 
    className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-[#070708]/80 backdrop-blur-2xl border-b border-white/5 py-4' 
        : 'bg-transparent py-8'
    }`}
    role="navigation"
    aria-label="Main navigation"
  >
    <div className="max-w-6xl mx-auto px-8 flex justify-between items-center">
      <button
        onClick={() => onScrollTo('home')}
        className="text-lg font-black tracking-tighter text-white flex items-center gap-3 hover:opacity-80 transition-opacity"
        aria-label="Home"
      >
        <div className="w-6 h-6 rounded-md bg-indigo-500 rotate-45" />
        <span>M.S. IBAOUI</span>
      </button>

      <div className="hidden md:flex gap-10 items-center">
        {['About', 'Projects', 'Skills', 'Education'].map(item => (
          <button
            key={item}
            onClick={() => onScrollTo(item.toLowerCase())}
            className={`text-xs font-bold uppercase tracking-widest transition-colors ${
              activeSection === item.toLowerCase()
                ? 'text-indigo-400'
                : 'text-slate-500 hover:text-white'
            }`}
          >
            {item}
          </button>
        ))}
        <a 
          href={`mailto:${SOCIAL_LINKS.email}`}
          className="px-6 py-2.5 rounded-xl bg-white text-black text-xs font-black hover:bg-indigo-500 hover:text-white transition-all flex items-center gap-2"
        >
          <Mail size={14} />
          HIRE ME
        </a>
      </div>

      {/* Mobile menu button (placeholder for future mobile nav) */}
      <div className="md:hidden">
        <a 
          href={`mailto:${SOCIAL_LINKS.email}`}
          className="p-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 transition-colors"
          aria-label="Contact via email"
        >
          <Mail size={18} />
        </a>
      </div>
    </div>
  </nav>
));

Navigation.displayName = 'Navigation';

export default Navigation;
