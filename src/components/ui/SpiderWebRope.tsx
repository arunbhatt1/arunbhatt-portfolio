import React, { useEffect, useState } from 'react';

export const SpiderWebRope: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [webShot, setWebShot] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = window.scrollY / totalHeight;
        setScrollProgress(Math.min(Math.max(currentProgress, 0), 1));
      }
      
      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  const handleSpiderClick = () => {
    setWebShot(true);
    setTimeout(() => setWebShot(false), 1200);

    // Scroll smoothly to top if clicked near bottom
    if (scrollProgress > 0.8) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Calculate pixel top position based on viewport height (keeping padding top and bottom)
  const verticalOffsetPct = scrollProgress * 85 + 5; // 5% to 90%

  return (
    <aside 
      aria-label="Spider-Man scroll progress web rope" 
      className="fixed right-3 sm:right-6 md:right-8 top-0 bottom-0 z-40 flex flex-col items-center pointer-events-none select-none w-10"
    >
      {/* Spider-Man Web Rope Line */}
      <div className="relative h-full w-full flex justify-center">
        {/* Unfilled Web String */}
        <div className="absolute top-0 bottom-0 w-[2px] bg-slate-800/60 backdrop-blur-xs" />

        {/* Filled Active Web Thread with Spider Red/Blue Glow */}
        <div 
          className="absolute top-0 w-[2px] bg-gradient-to-b from-spider-red via-spider-blue to-spider-red shadow-[0_0_10px_#e62429] transition-all duration-75"
          style={{ height: `${verticalOffsetPct}%` }}
        />

        {/* Web Nodes/Knots along the thread */}
        <div className="absolute top-[20%] w-2 h-2 rounded-full border border-spider-red/40 bg-[#0d0e12]" />
        <div className="absolute top-[40%] w-2 h-2 rounded-full border border-spider-blue/40 bg-[#0d0e12]" />
        <div className="absolute top-[60%] w-2 h-2 rounded-full border border-spider-red/40 bg-[#0d0e12]" />
        <div className="absolute top-[80%] w-2 h-2 rounded-full border border-spider-blue/40 bg-[#0d0e12]" />

        {/* Crawling Spider Mascot */}
        <div 
          className="absolute pointer-events-auto cursor-pointer transition-all duration-150 ease-out flex items-center justify-center group"
          style={{ top: `${verticalOffsetPct}%`, transform: 'translateY(-50%)' }}
          onClick={handleSpiderClick}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          {/* Web Shoot Particle Burst Effect */}
          {webShot && (
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
              <span className="absolute w-24 h-[1px] bg-white/80 rotate-45 animate-ping" />
              <span className="absolute w-24 h-[1px] bg-spider-red -rotate-45 animate-ping" />
              <span className="absolute w-24 h-[1px] bg-spider-blue rotate-90 animate-ping" />
              <span className="absolute text-[10px] font-mono text-spider-red font-extrabold tracking-widest uppercase -top-7 animate-bounce">
                THWIP! 🕸️
              </span>
            </div>
          )}

          {/* Scroll percentage tooltip */}
          <div 
            className={`absolute right-12 px-2.5 py-1 rounded-md bg-[#14161f] border border-spider-red/30 text-[11px] font-mono text-slate-200 shadow-xl whitespace-nowrap transition-all duration-200 ${
              showTooltip || isScrolling ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'
            }`}
          >
            <span className="text-spider-red font-bold">{Math.round(scrollProgress * 100)}%</span> Down
            {scrollProgress > 0.8 && <span className="block text-[9px] text-slate-400">Click to Swing Top 🕸️</span>}
          </div>

          {/* Spider Container with Wiggle when scrolling */}
          <div className={`relative transition-transform duration-200 group-hover:scale-125 ${isScrolling ? 'animate-spider-wiggle' : ''}`}>
            {/* Red & Blue Aura Glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-spider-red/40 to-spider-blue/40 rounded-full blur-sm opacity-60 group-hover:opacity-100 transition-opacity" />

            {/* Custom Spider-Man Spider SVG */}
            <svg 
              width="36" 
              height="36" 
              viewBox="0 0 100 100" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="relative drop-shadow-[0_4px_12px_rgba(230,36,41,0.5)]"
            >
              {/* Spider Legs - Left Side */}
              <path d="M45 40 Q25 20 10 30" stroke="#e62429" strokeWidth="4" strokeLinecap="round" />
              <path d="M45 48 Q20 38 8 50" stroke="#0f52ba" strokeWidth="4" strokeLinecap="round" />
              <path d="M45 55 Q20 62 12 75" stroke="#e62429" strokeWidth="4" strokeLinecap="round" />
              <path d="M45 62 Q25 80 18 90" stroke="#0f52ba" strokeWidth="4" strokeLinecap="round" />

              {/* Spider Legs - Right Side */}
              <path d="M55 40 Q75 20 90 30" stroke="#e62429" strokeWidth="4" strokeLinecap="round" />
              <path d="M55 48 Q80 38 92 50" stroke="#0f52ba" strokeWidth="4" strokeLinecap="round" />
              <path d="M55 55 Q80 62 88 75" stroke="#e62429" strokeWidth="4" strokeLinecap="round" />
              <path d="M55 62 Q75 80 82 90" stroke="#0f52ba" strokeWidth="4" strokeLinecap="round" />

              {/* Spider Head & Abdomen Body */}
              <ellipse cx="50" cy="38" rx="8" ry="10" fill="#e62429" stroke="#ffffff" strokeWidth="1.5" />
              <ellipse cx="50" cy="58" rx="14" ry="18" fill="#0d0e12" stroke="#e62429" strokeWidth="2.5" />

              {/* Spider-Man Suit Chest Symbol Accent (Black/Red Hourglass) */}
              <path d="M44 48 L56 48 L50 58 L44 68 L56 68 Z" fill="#e62429" />

              {/* Glowing Spider Eyes */}
              <ellipse cx="46" cy="36" rx="2.5" ry="4" fill="#ffffff" transform="rotate(-15 46 36)" />
              <ellipse cx="54" cy="36" rx="2.5" ry="4" fill="#ffffff" transform="rotate(15 54 36)" />
            </svg>
          </div>
        </div>
      </div>
    </aside>
  );
};
