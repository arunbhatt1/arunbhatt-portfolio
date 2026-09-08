import React from 'react';

interface SkillBadgeProps {
  name: string;
  level?: 'Proficient' | 'Familiar' | 'Basic';
  highlight?: boolean;
}

export const SkillBadge: React.FC<SkillBadgeProps> = ({
  name,
  level,
  highlight = false
}) => {
  return (
    <div
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 border ${
        highlight
          ? 'bg-[#14161f] text-white border-spider-red/40 shadow-sm hover:border-spider-red hover:bg-spider-red/10'
          : 'bg-[#14161f]/70 text-slate-300 border-white/10 hover:border-spider-blue/40 hover:text-white hover:bg-spider-blue/10'
      }`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${highlight ? 'bg-spider-red animate-pulse' : 'bg-slate-500'}`} />
      <span>{name}</span>
      {level && level !== 'Proficient' && (
        <span className="text-[10px] text-slate-400 px-2 py-0.5 rounded-full bg-[#0d0e12] border border-white/10 font-mono">
          {level}
        </span>
      )}
    </div>
  );
};

