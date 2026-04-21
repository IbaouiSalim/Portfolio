import React, { memo } from 'react';
import { User } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { LANGUAGES } from '../data/portfolio';

const AboutSection = memo(() => (
  <section id="about" className="py-32 px-8 max-w-6xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-20 items-center">
      <div className="relative">
        <div className="aspect-[4/5] rounded-[3rem] bg-indigo-500/5 border border-white/5 p-3 relative group hover:border-indigo-500/30 transition-colors">
          <img 
            src="/profile.png" 
            alt="Mohamed Salim Ibaoui"
            className="w-full h-full rounded-[2.5rem] object-cover"
          />
          <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-t from-black/60 to-transparent flex flex-col items-center justify-end p-12">
            <div className="text-center space-y-4 w-full">
              <p className="text-white font-black text-3xl tracking-tight">Mohamed Salim Ibaoui</p>
              <p className="text-indigo-400 font-bold tracking-widest text-xs uppercase">Informatik Student</p>
              <div className="flex gap-4 pt-4 justify-center">
                {LANGUAGES.map(lang => (
                  <span 
                    key={lang.code}
                    className="px-3 py-1 rounded-md bg-white/10 text-[10px] text-slate-300 border border-white/20 backdrop-blur-sm"
                  >
                    {lang.code} {lang.level}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="space-y-8">
        <SectionHeading icon={User}>Profile Summary</SectionHeading>
        <p className="text-xl text-white font-medium leading-relaxed italic">
          "Seeking an internship to apply technical skills in real-world environments."
        </p>
        <p className="text-lg text-slate-400 leading-relaxed">
          I am a Computer Engineering student at <strong className="text-white">FH Aachen</strong> with a strong foundation in software development, data analysis, and system-oriented programming. 
        </p>
        <p className="text-lg text-slate-400 leading-relaxed">
          My expertise lies in building complex applications using <strong className="text-white">Java</strong>, <strong className="text-white">Python</strong>, and <strong className="text-white">Go</strong>, while maintaining a keen eye for clean, responsive frontend design. I enjoy solving algorithmic challenges and implementing secure, containerized environments.
        </p>
        <div className="pt-6 grid grid-cols-2 gap-4">
          <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-indigo-500/20 transition-colors">
            <p className="text-white font-bold text-2xl">150+</p>
            <p className="text-xs text-indigo-400 font-bold uppercase tracking-wider">ECTS Credits</p>
          </div>
          <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-indigo-500/20 transition-colors">
            <p className="text-white font-bold text-2xl">2.4</p>
            <p className="text-xs text-indigo-400 font-bold uppercase tracking-wider">Current GPA</p>
          </div>
        </div>
      </div>
    </div>
  </section>
));

AboutSection.displayName = 'AboutSection';

export default AboutSection;
