import React, { memo } from 'react';
import { Monitor, BookOpen, Terminal, Globe, Settings, Database } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { SKILLS, EDUCATION } from '../data/portfolio';

const iconMap = {
  Terminal: Terminal,
  Globe: Globe,
  Settings: Settings,
  Database: Database,
};

const SkillsEducationSection = memo(() => (
  <section className="py-32 px-8 max-w-6xl mx-auto grid lg:grid-cols-5 gap-24">
    <div id="skills" className="lg:col-span-2">
      <SectionHeading icon={Monitor}>Technical Arsenal</SectionHeading>
      <div className="grid gap-6">
        {SKILLS.map((skill) => {
          const IconComponent = iconMap[skill.icon];
          return (
            <div 
              key={skill.category} 
              className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-indigo-500/20 transition-all group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="text-indigo-400 group-hover:scale-110 transition-transform">
                  {IconComponent && <IconComponent size={20} />}
                </div>
                <h4 className="text-white font-bold tracking-tight">{skill.category}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map(item => (
                  <span 
                    key={item} 
                    className="px-3 py-1.5 rounded-xl bg-white/5 text-xs text-slate-400 font-medium border border-white/5 hover:border-indigo-500/20 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>

    <div id="education" className="lg:col-span-3">
      <SectionHeading icon={BookOpen}>Education</SectionHeading>
      <div className="space-y-16">
        {EDUCATION.map((edu, idx) => (
          <div 
            key={idx} 
            className="relative pl-12 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-indigo-500 before:to-transparent group"
          >
            <div className="absolute left-[-6px] top-1 w-3 h-3 rounded-full bg-indigo-500 border-4 border-[#070708] group-hover:scale-150 transition-transform" />
            <span className="text-[10px] font-black text-indigo-400 tracking-[0.2em] mb-3 block uppercase">{edu.year}</span>
            <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
            <p className="text-white font-semibold text-sm mb-4">{edu.school}</p>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xl">{edu.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
));

SkillsEducationSection.displayName = 'SkillsEducationSection';

export default SkillsEducationSection;
