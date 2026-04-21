import React from 'react';

const SectionHeading = ({ children, icon: Icon }) => {
  if (!Icon) {
    console.warn('SectionHeading: icon prop is required');
    return null;
  }
  
  return (
    <div className="flex items-center gap-4 mb-16">
      <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
        <Icon size={24} />
      </div>
      <h2 className="text-4xl font-bold tracking-tight text-white">{children}</h2>
    </div>
  );
};

export default SectionHeading;
