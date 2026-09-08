import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { GitHubSection } from './components/sections/GitHubSection';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';
import { SpiderWebRope } from './components/ui/SpiderWebRope';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0d0e12] text-slate-100 selection:bg-spider-red/20 selection:text-spider-red relative spider-web-bg">
      {/* Spider-Man Web Rope Scroll Progress Tracker */}
      <SpiderWebRope />

      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <GitHubSection />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;

