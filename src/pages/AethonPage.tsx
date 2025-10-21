import React from 'react';
import { motion } from 'framer-motion';

// Components
import HeroSection from '../components/aethon/HeroSection';
import TeamSection from '../components/aethon/TeamSection';
import ProjectOverview from '../components/aethon/ProjectOverview';
import TechnicalSpecs from '../components/aethon/TechnicalSpecs';

const AethonPage = () => {
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="bg-black text-white min-h-screen overflow-x-hidden relative"
    >
      {/* GLOBAL Geometric Background Pattern */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-80 h-80 border-2 border-[#7f1d1d]/50 rotate-45 rounded-3xl"></div>
        <div className="absolute top-20 right-20 w-96 h-96 border-2 border-[#7f1d1d]/45 rotate-12 rounded-2xl"></div>
        <div className="absolute bottom-20 left-1/4 w-72 h-72 border-2 border-[#7f1d1d]/55 -rotate-12 rounded-xl"></div>
        <div className="absolute bottom-40 right-1/3 w-88 h-88 border-2 border-[#7f1d1d]/50 rotate-45 rounded-2xl"></div>
        <div className="absolute top-1/3 left-1/2 w-64 h-64 border-2 border-[#7f1d1d]/45 rotate-30 rounded-lg"></div>
        <div className="absolute top-60 right-1/4 w-56 h-56 border-2 border-[#7f1d1d]/50 -rotate-45 rounded-xl"></div>
        <div className="absolute bottom-1/3 left-20 w-68 h-68 border-2 border-[#7f1d1d]/45 rotate-12 rounded-2xl"></div>
        <div className="absolute top-40 left-1/3 w-52 h-52 border-2 border-[#7f1d1d]/50 -rotate-30 rounded-lg"></div>
        <div className="absolute top-80 left-1/3 w-32 h-32 border-2 border-[#7f1d1d]/60 rotate-45 rounded-lg"></div>
        <div className="absolute top-1/4 right-40 w-40 h-40 border-2 border-[#7f1d1d]/55 -rotate-30 rounded-xl"></div>
        <div className="absolute bottom-60 right-10 w-36 h-36 border-2 border-[#7f1d1d]/50 rotate-60 rounded-lg"></div>
        <div className="absolute top-96 left-20 w-28 h-28 border-2 border-[#7f1d1d]/55 rotate-15 rounded-md"></div>
        <div className="absolute top-32 right-1/2 w-44 h-44 border-2 border-[#7f1d1d]/45 rotate-75 rounded-xl"></div>
        <div className="absolute bottom-80 left-1/2 w-48 h-48 border-2 border-[#7f1d1d]/50 -rotate-20 rounded-lg"></div>
        <div className="absolute top-1/2 right-20 w-60 h-60 border-2 border-[#7f1d1d]/45 rotate-50 rounded-2xl"></div>
        <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-transparent via-[#7f1d1d]/35 to-transparent rotate-12"></div>
        <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-transparent via-[#7f1d1d]/40 to-transparent -rotate-12"></div>
        <div className="absolute top-0 left-1/2 w-1 h-full bg-gradient-to-b from-transparent via-[#7f1d1d]/30 to-transparent rotate-6"></div>
        <div className="absolute top-0 right-1/2 w-1 h-full bg-gradient-to-b from-transparent via-[#7f1d1d]/35 to-transparent -rotate-8"></div>
        <div className="absolute top-32 left-1/2 w-4 h-4 bg-[#7f1d1d]/70 rounded-full"></div>
        <div className="absolute top-96 right-1/4 w-5 h-5 bg-[#7f1d1d]/60 rounded-full"></div>
        <div className="absolute bottom-32 left-1/3 w-3 h-3 bg-[#7f1d1d]/65 rounded-full"></div>
        <div className="absolute bottom-80 right-1/2 w-4 h-4 bg-[#7f1d1d]/70 rounded-full"></div>
        <div className="absolute top-64 left-20 w-3 h-3 bg-[#7f1d1d]/60 rounded-full"></div>
        <div className="absolute bottom-96 right-40 w-5 h-5 bg-[#7f1d1d]/65 rounded-full"></div>
        <div className="absolute top-20 left-1/2 w-24 h-2 bg-[#7f1d1d]/50 rotate-45"></div>
        <div className="absolute bottom-40 right-1/4 w-32 h-2 bg-[#7f1d1d]/45 -rotate-30"></div>
        <div className="absolute top-1/2 left-10 w-28 h-2 bg-[#7f1d1d]/50 rotate-60"></div>
        <div className="absolute bottom-20 left-1/2 w-20 h-2 bg-[#7f1d1d]/45 -rotate-45"></div>
        <div className="absolute top-5 left-5 w-16 h-16 border-2 border-[#7f1d1d]/60 rotate-45"></div>
        <div className="absolute top-5 right-5 w-20 h-20 border-2 border-[#7f1d1d]/55 -rotate-30"></div>
        <div className="absolute bottom-5 left-5 w-18 h-18 border-2 border-[#7f1d1d]/60 rotate-60"></div>
        <div className="absolute bottom-5 right-5 w-22 h-22 border-2 border-[#7f1d1d]/55 -rotate-15"></div>
        <div className="absolute top-1/4 left-10 w-36 h-36 border-2 border-[#7f1d1d]/40 rotate-25 rounded-lg"></div>
        <div className="absolute bottom-1/4 right-10 w-42 h-42 border-2 border-[#7f1d1d]/45 -rotate-35 rounded-xl"></div>
        <div className="absolute top-3/4 left-1/3 w-38 h-38 border-2 border-[#7f1d1d]/40 rotate-55 rounded-md"></div>
        <div className="absolute bottom-1/2 right-1/3 w-34 h-34 border-2 border-[#7f1d1d]/45 -rotate-25 rounded-lg"></div>
        <div className="absolute top-1/3 left-0 w-1 h-2/3 bg-gradient-to-b from-transparent via-[#7f1d1d]/25 to-transparent rotate-15"></div>
        <div className="absolute bottom-1/3 right-0 w-1 h-2/3 bg-gradient-to-t from-transparent via-[#7f1d1d]/30 to-transparent -rotate-15"></div>
        <div className="absolute top-1/2 left-1/4 w-6 h-6 bg-[#7f1d1d]/50 rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-[#7f1d1d]/55 rounded-full"></div>
        <div className="absolute top-2/3 left-3/4 w-5 h-5 bg-[#7f1d1d]/50 rounded-full"></div>
      </div>

      {/* Page Content */}
      <div className="relative z-10 w-full">
        <HeroSection />
        <ProjectOverview />
        <div className="my-20" />
        <TeamSection />
        <div className="my-20" />
        <TechnicalSpecs />
        <div className="h-20" />
      </div>
    </motion.div>
  );
};

export default AethonPage;
