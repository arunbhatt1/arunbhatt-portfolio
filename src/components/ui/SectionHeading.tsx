import React from 'react';

interface SectionHeadingProps {
  number?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  number,
  title,
  subtitle,
  align = 'left'
}) => {
  return (
    <div className={`mb-14 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <div className={`inline-flex items-center gap-3 mb-2.5 ${align === 'center' ? 'justify-center' : ''}`}>
        {number && (
          <span className="font-mono text-xs md:text-sm font-bold tracking-widest text-spider-red px-3 py-1 rounded-full bg-spider-red/10 border border-spider-red/30">
            {number}
          </span>
        )}
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className={`text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed ${align === 'center' ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-spider-red via-spider-blue to-transparent ${align === 'center' ? 'mx-auto' : ''}`} />
    </div>
  );
};

