import React, { useState, useEffect } from 'react';
import { Flag, ChevronLeft, ChevronRight, Heart, Zap, Trophy, Target, Gauge } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import GalleryBg from '../assets/fkdc3.6.jpg';
import img1 from '../assets/img2.1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';
import img6 from '../assets/img6.jpg';
import img7 from '../assets/img7.jpg';
import img8 from '../assets/img8.jpg';
import img9 from '../assets/img9.jpg';
import fkdcImg1 from '../assets/fkdc pic1.png';
import fkdcImg2 from '../assets/fkdc pic2.jpg';
import fkdcImg3 from '../assets/fkdc pic3.jpg';
import fkdcImg4 from '../assets/fkdc pic4.jpg';
import fkdcImg5 from '../assets/fkdc pic5.jpg';
import fkdcImg6 from '../assets/fkdc pic6.jpg';
import fkdcImg7 from '../assets/fkdc pic7.jpg';
import fkdcImg8 from '../assets/fkdc pic8.jpg';
import fkdcImg10 from '../assets/fkdc pic10.jpg';

const ProjectGallery: React.FC = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('gokart');

  const goKartSliderImages = [
    { id: 1, src: img6, alt: 'Go-Kart Work 1' },
    { id: 2, src: img7, alt: 'Go-Kart Work 2' },
    { id: 3, src: img8, alt: 'Go-Kart Work 3' },
    { id: 4, src: img9, alt: 'Go-Kart Work 4' },
  ];

  const fkdcSliderImages = [
    { id: 1, src: fkdcImg5, alt: 'FKDC Season 7 Work 5' },
    { id: 2, src: fkdcImg6, alt: 'FKDC Season 7 Work 6' },
    { id: 3, src: fkdcImg7, alt: 'FKDC Season 7 Work 7' },
    { id: 4, src: fkdcImg8, alt: 'FKDC Season 7 Work 8' },
  ];

  const goKartProjects = [
    {
      id: 1,
      title: "Brains, Grit & Grease",
      image: img5,
      featured: true,
      fontColor: "text-white",
      margin: "mx-2 my-6",
      verticalPosition: "top-8",
      icon: Trophy,
      description: "Passion Fuels Innovation",
      descriptionFontColor: "text-white",
    },
    {
      id: 2,
      title: "All Hands on Deck",
      image: img3,
      fontColor: "text-black",
      margin: "mx-2 my-6",
      verticalPosition: "top-2.5",
      icon: Target,
      description: "Unified Team, Unstoppable Force",
      descriptionFontColor: "text-black",
    },
    {
      id: 3,
      title: "Competition Grid",
      image: img2,
      fontColor: "text-white",
      margin: "mx-2 my-6",
      verticalPosition: "top-6",
      icon: Flag,
      description: "Adrenaline-Fueled Competition",
      descriptionFontColor: "text-white",
    },
    {
      id: 4,
      title: "Powertrain Perspective",
      image: img4,
      fontColor: "text-white",
      margin: "mx-2 my-6",
      verticalPosition: "bottom-6",
      icon: Gauge,
      description: "Precision Power Dynamics",
      descriptionFontColor: "text-white",
    },
    {
      id: 5,
      title: "MITS Go-Kart Project",
      image: img1,
      fontColor: "text-white",
      margin: "mx-2 my-6",
      verticalPosition: "bottom-6",
      icon: Zap,
      description: "Engineering Excellence Unleashed",
      descriptionFontColor: "text-white",
    }
  ];

  const fkdcProjects = [
    {
      id: 1,
      title: "FKDC Season 7 Project",
      image: fkdcImg10,
      featured: true,
      fontColor: "text-white",
      margin: "mx-2 my-6",
      verticalPosition: "top-8",
      icon: Trophy,
      description: "Driven by Passion",
      descriptionFontColor: "text-white",
    },
    {
      id: 2,
      title: "To the Track",
      image: fkdcImg2,
      fontColor: "text-white",
      margin: "mx-2 my-6",
      verticalPosition: "top-2.5",
      icon: Target,
      description: "Hands that build, hands that push",
      descriptionFontColor: "text-white",
    },
    {
      id: 3,
      title: "Grid Ready",
      image: fkdcImg3,
      fontColor: "text-white",
      margin: "mx-2 my-6",
      verticalPosition: "top-6",
      icon: Flag,
      description: "Ready, steady, race!",
      descriptionFontColor: "text-white",
    },
    {
      id: 4,
      title: "Track Racer",
      image: fkdcImg4,
      fontColor: "text-white",
      margin: "mx-2 my-6",
      verticalPosition: "bottom-6",
      icon: Gauge,
      description: "Test lap in motion",
      descriptionFontColor: "text-white",
    },
    {
      id: 5,
      title: "FKDC Passion",
      image: fkdcImg1,
      fontColor: "text-white",
      margin: "mx-2 my-6",
      verticalPosition: "bottom-6",
      icon: Zap,
      description: "Formula Kart Design Excellence",
      descriptionFontColor: "text-white",
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.05
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const slideVariants = {
    center: {
      x: 0,
      scale: 1,
      rotate: 0,
      opacity: 1,
      zIndex: 10,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: 0.6
      }
    },
    left: {
      x: -250,
      scale: 0.6,
      rotate: -5,
      opacity: 0.4,
      zIndex: 5,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: 0.6
      }
    },
    right: {
      x: 250,
      scale: 0.6,
      rotate: 5,
      opacity: 0.4,
      zIndex: 5,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: 0.6
      }
    },
    hidden: {
      opacity: 0,
      scale: 0.5,
      x: 0,
      zIndex: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const getBgColor = (fontColor: string): string => {
    return fontColor === 'text-white' ? 'bg-white' : 'bg-gray-500';
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % (activeSection === 'gokart' ? goKartSliderImages.length : fkdcSliderImages.length));
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused, activeSection]);

  const handlePrevSlide = (): void => {
    setCurrentSlide((prev) => (prev === 0 ? (activeSection === 'gokart' ? goKartSliderImages.length : fkdcSliderImages.length) - 1 : prev - 1));
  };

  const handleNextSlide = (): void => {
    setCurrentSlide((prev) => (prev + 1) % (activeSection === 'gokart' ? goKartSliderImages.length : fkdcSliderImages.length));
  };

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden relative font-['Poppins']">
      {/* Main content wrapper */}
      <div className="relative z-10 flex-grow flex flex-col">
        {/* Top section with background image */}
        <motion.div
          className="min-h-screen px-2 sm:px-4 md:px-6 lg:px-8 py-28 sm:py-32 md:py-36 lg:py-44 flex flex-col justify-center bg-cover bg-center bg-no-repeat relative z-30"
          style={{ backgroundImage: `url(${GalleryBg})` }}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/40 to-transparent z-15"></div>
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <div className="relative z-20 max-w-5xl mx-auto text-center">
            <motion.div
              className="inline-flex items-center gap-3 sm:gap-4 mb-14 sm:mb-16"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <motion.div
                className="w-12 sm:w-16 md:w-20 h-px bg-gradient-to-r from-transparent via-red-500 to-red-600"
                initial={{ width: 0 }}
                animate={{ width: "auto" }}
                transition={{ delay: 0.4, duration: 0.8 }}
              />
              <motion.div
                className="mt-2 sm:mt-0"
                whileHover={{ rotate: 5, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Flag className="w-6 h-6 sm:w-8 h-8 text-red-400" />
              </motion.div>
              <motion.div
                className="w-12 sm:w-16 md:w-20 h-px bg-gradient-to-r from-red-600 via-red-500 to-transparent"
                initial={{ width: 0 }}
                animate={{ width: "auto" }}
                transition={{ delay: 0.4, duration: 0.8 }}
              />
            </motion.div>

            <motion.h1
              className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black mb-14 sm:mb-16 tracking-tight leading-tight overflow-hidden text-ellipsis"
              style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <motion.span
                className="text-white mx-2"
                initial={{ backgroundSize: "0% 100%" }}
                animate={{ backgroundSize: "100% 100%" }}
                transition={{ delay: 1, duration: 1.2 }}
              >
                STORIES
              </motion.span>
              <motion.span className="text-[#7f1d1d] mx-2">IN</motion.span>
              <motion.span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7f1d1d] to-black mx-2">MOTION</motion.span>
            </motion.h1>

            {/* Section Buttons */}
            <motion.div
              className="flex justify-center gap-4 mt-12 sm:mt-14"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.6 }}
            >
              <button
                onClick={() => setActiveSection('gokart')}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-md font-medium text-base sm:text-lg transition-all duration-200 ${
                  activeSection === 'gokart'
                    ? 'bg-[#7f1d1d] text-white'
                    : 'bg-gray-600/60 text-white hover:bg-gray-800/80'
                }`}
              >
                GKDC Season 12
              </button>
              <button
                onClick={() => setActiveSection('fkdc')}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-md font-medium text-base sm:text-lg transition-all duration-200 ${
                  activeSection === 'fkdc'
                    ? 'bg-[#7f1d1d] text-white'
                    : 'bg-gray-600/60 text-white hover:bg-gray-800/80'
                }`}
              >
                FKDC Season 7
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* Project cards section with geometric pattern */}
        <div className="px-2 sm:px-4 md:px-6 lg:px-8 pb-12 sm:pb-16 md:pb-20 lg:pb-24 relative z-10">
          {/* Geometric Pattern Background */}
          <div className="absolute inset-0 z-[0] pointer-events-none opacity-100">
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

          <div className="max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-5xl mx-auto">
            <AnimatePresence initial={false}>
              <motion.div
                key={activeSection}
                initial={{ opacity: activeSection === 'gokart' ? 1 : 0, y: activeSection === 'gokart' ? 0 : 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {(activeSection === 'gokart' ? goKartProjects : fkdcProjects).map((project, index) => (
                  <React.Fragment key={project.id}>
                    {project.id === 5 && (
                      <motion.div
                        className="group cursor-pointer mx-2 my-8 relative z-20"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        variants={cardVariants}
                        whileHover={{ y: -8 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                      >
                        <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden border-2 border-red-900/20">
                          <div className="relative w-full h-full flex items-center justify-center">
                            <AnimatePresence initial={false}>
                              {(activeSection === 'gokart' ? goKartSliderImages : fkdcSliderImages).map((image, idx) => {
                                const isCenter = idx === currentSlide;
                                const isLeft = idx === (currentSlide - 1 + (activeSection === 'gokart' ? goKartSliderImages : fkdcSliderImages).length) % (activeSection === 'gokart' ? goKartSliderImages : fkdcSliderImages).length;
                                const isRight = idx === (currentSlide + 1) % (activeSection === 'gokart' ? goKartSliderImages : fkdcSliderImages).length;
                                return (
                                  <motion.img
                                    key={`${image.id}-${idx}`}
                                    src={image.src}
                                    alt={image.alt}
                                    className="absolute w-[70%] sm:w-[60%] h-[80%] sm:h-[90%] object-cover rounded-xl shadow-2xl border-2 border-gray-700/50"
                                    variants={slideVariants}
                                    initial="hidden"
                                    animate={
                                      isCenter ? "center" : isLeft ? "left" : isRight ? "right" : "hidden"
                                    }
                                    style={{
                                      boxShadow: isCenter
                                        ? '0 20px 40px rgba(0, 0, 0, 0.6)'
                                        : '0 10px 20px rgba(0, 0, 0, 0.3)',
                                    }}
                                  />
                                );
                              })}
                            </AnimatePresence>
                          </div>

                          <div className="absolute inset-0 bg-gradient-to-r from-red-900/15 via-transparent to-red-900/15 group-hover:from-red-800/10 group-active:from-red-800/10 group-hover:to-red-800/10 group-active:to-red-800/10" />
                          <div className="absolute left-0 top-0 bottom-0 w-0.5 sm:w-1 bg-gradient-to-b from-red-400 via-red-500 to-red-600" />
                          <div className="absolute right-0 top-0 bottom-0 w-0.5 sm:w-1 bg-gradient-to-b from-red-400 via-red-500 to-red-600" />

                          <div className="absolute inset-0">
                            <div className="absolute top-8 sm:top-10 left-0 p-4 sm:p-6 md:p-8 lg:p-10 w-full max-w-[80%] sm:max-w-md md:max-w-lg lg:max-w-2xl z-20">
                              <motion.div
                                className="flex items-start"
                                whileHover={{ x: 8 }}
                                transition={{ type: "spring", stiffness: 400 }}
                              >
                                <div className="w-2 sm:w-3 h-6 sm:h-8 md:h-10 lg:h-12 mr-2 sm:mr-3 md:mr-4 mt-0.5 bg-gradient-to-b from-white via-red-100 to-white" />
                                <div className="flex-1">
                                  <motion.h3
                                    className="text-sm sm:text-base md:text-xl lg:text-2xl font-black text-white mb-2 sm:mb-3 leading-snug tracking-tight overflow-hidden text-ellipsis"
                                    style={{
                                      background: 'linear-gradient(to right, white, black)',
                                      WebkitBackgroundClip: 'text',
                                      WebkitTextFillColor: 'transparent',
                                    }}
                                    variants={containerVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: false }}
                                  >
                                    {Array.from(activeSection === 'gokart' ? "Behind Every Bolt" : "FKDC Season 7").map((char, idx) => (
                                      <motion.span
                                        key={`${char}-${idx}`}
                                        variants={letterVariants}
                                        className="inline-block"
                                      >
                                        {char === ' ' ? '\u00A0' : char}
                                      </motion.span>
                                    ))}
                                  </motion.h3>

                                  <motion.div
                                    className={`relative transition-all duration-500 ${isPaused ? 'opacity-100' : 'opacity-70'}`}
                                  >
                                    <div className="w-full h-0.5 bg-gradient-to-r from-red-400 to-transparent rounded-full" />
                                    <div className="w-3/4 h-0.5 bg-gradient-to-r from-red-400 to-transparent mt-1 sm:mt-2 rounded-full" />
                                  </motion.div>
                                </div>
                              </motion.div>
                            </div>
                          </div>

                          <motion.button
                            onClick={handlePrevSlide}
                            className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 bg-gray-600/60 backdrop-blur-sm p-2 sm:p-3 rounded-full hover:bg-gray-800/80 active:bg-gray-800/80 transition-all duration-200 border border-gray-400/50 z-20"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                          </motion.button>
                          <motion.button
                            onClick={handleNextSlide}
                            className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 bg-gray-600/60 backdrop-blur-sm p-2 sm:p-3 rounded-full hover:bg-gray-800/80 active:bg-gray-800/80 transition-all duration-200 border border-gray-400/50 z-20"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                          </motion.button>

                          <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-20">
                            {(activeSection === 'gokart' ? goKartSliderImages : fkdcSliderImages).map((_, idx) => (
                              <motion.button
                                key={idx}
                                onClick={() => setCurrentSlide(idx)}
                                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
                                  idx === currentSlide ? 'bg-red-500 scale-110' : 'bg-gray-300/60'
                                }`}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                              />
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}

                    <motion.div
                      className={`group cursor-pointer ${project.margin} relative z-20`}
                      onMouseEnter={() => setActiveProject(project.id)}
                      onMouseLeave={() => setActiveProject(null)}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false, amount: 0.3 }}
                      variants={cardVariants}
                      whileHover={{
                        y: -10,
                        transition: { type: "spring", stiffness: 400 }
                      }}
                    >
                      <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden border-2 border-gray-900/40 bg-black/40 shadow-xl group-hover:shadow-red-500/20 transition-all duration-300">
                        <motion.img
                          src={project.image}
                          alt={project.title}
                          className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 via-transparent to-red-900/20 group-hover:from-red-800/10 group-active:from-red-800/10 group-hover:to-red-800/10 group-active:to-red-800/10 transition-all duration-300" />
                        <div className="absolute left-0 top-0 bottom-0 w-0.5 sm:w-1 bg-gradient-to-b from-red-400 via-red-500 to-red-600 group-hover:w-1 sm:group-hover:w-1.5 transition-all duration-300" />

                        <div className="absolute inset-0">
                          <div className={`absolute ${project.verticalPosition} left-0 p-4 sm:p-6 md:p-8 lg:p-10 w-full max-w-[80%] sm:max-w-sm md:max-w-md lg:max-w-lg`}>
                            {project.title && (
                              <motion.div
                                className="flex items-start"
                                whileHover={{ x: 4 }}
                                transition={{ type: "spring", stiffness: 400 }}
                              >
                                <div className={`w-2 sm:w-3 h-6 sm:h-8 md:h-10 lg:h-12 mr-2 sm:mr-3 md:mr-4 mt-0.5 ${getBgColor(project.fontColor)} group-hover:shadow-lg transition-all duration-300`} />
                                <div className="flex-1">
                                  <motion.h3
                                    className={`text-sm sm:text-base md:text-xl lg:text-2xl font-black ${project.fontColor} mb-2 sm:mb-3 leading-snug tracking-tight overflow-hidden text-ellipsis`}
                                    variants={containerVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: false }}
                                  >
                                    {project.title.split('').map((char, idx) => (
                                      <motion.span
                                        key={`${char}-${idx}`}
                                        variants={letterVariants}
                                        className="inline-block"
                                      >
                                        {char === ' ' ? '\u00A0' : char}
                                      </motion.span>
                                    ))}
                                  </motion.h3>

                                  <motion.p
                                    className={`${project.descriptionFontColor} text-xs sm:text-sm md:text-base font-bold leading-normal mb-1 sm:mb-4 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-all duration-300`}
                                    initial={{ y: 10 }}
                                    whileInView={{ y: 0 }}
                                  >
                                    {project.description}
                                  </motion.p>

                                  <motion.div
                                    className={`relative transition-all duration-300 ${
                                      activeProject === project.id ? 'opacity-100' : 'opacity-70'
                                    }`}
                                  >
                                    <div className="w-full h-0.4 sm:h-0.5 bg-gradient-to-r from-red-400 to-transparent rounded-full" />
                                    <div className="w-3/4 h-0.4 sm:h-0.5 bg-gradient-to-r from-red-400 to-transparent mt-1 sm:mt-2 rounded-full" />
                                  </motion.div>
                                </div>
                              </motion.div>
                            )}
                          </div>
                        </div>

                        <motion.div
                          className="absolute top-2 sm:top-3 right-2 sm:right-3 md:top-4 md:right-4"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 1 }}
                        >
                          <div className="bg-black/80 backdrop-blur-md text-white px-2 sm:px-3 py-1 sm:py-2 md:px-4 md:py-3 rounded-md sm:rounded-xl border border-red-800/50 group-hover:border-red-500 group-active:border-red-600 transition-all duration-300">
                            <span className="inline-flex items-center gap-1 sm:gap-2 text-xs sm:text-sm md:text-base font-black text-red-600">
                              {project.id === 5 ? (
                                <Heart className="w-4 h-4 sm:w-5 h-5 md:w-6 md:h-6" />
                              ) : (
                                <>
                                  <project.icon className="w-3 h-3 sm:w-4 h-4 md:w-5 md:h-5" />
                                  {`#${index + 1}`}
                                </>
                              )}
                            </span>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  </React.Fragment>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Footer section */}
        <motion.div
          className="border-t border-gray-800/30 bg-black relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-full sm:max-w-4xl md:max-w-5xl lg:max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8">
            <div className="text-center">
              <motion.div
                className="flex items-center justify-center gap-2 sm:gap-4 mb-4 sm:mb-6"
              >
                <motion.div
                  whileHover={{ rotate: 8 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Flag className="w-6 h-6 sm:w-8 h-8 text-white" />
                </motion.div>
                <motion.h3
                  className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight"
                >
                  RACE WITH US
                </motion.h3>
                <motion.div
                  whileHover={{ rotate: -8 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Flag className="w-6 h-6 sm:w-8 h-8 text-white" />
                </motion.div>
              </motion.div>
              <motion.p
                className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-200 mb-2 sm:mb-4 font-medium max-w-xl sm:max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Join the next generation of motorsports innovation at MITS
              </motion.p>

              <motion.div
                className="flex flex-wrap justify-center gap-4 sm:gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectGallery;