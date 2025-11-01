import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import BackGround from '../../assets/Mitsbg.jpg';
import BackGround2 from '../../assets/track4.png';

const buttonVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const scrollVariants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 0.8,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 1.2,
    },
  },
  pulse: {
    scale: [1, 1.1, 1],
    transition: {
      repeat: Infinity,
      duration: 1.5,
    },
  },
};

const Hero = () => {
  const { scrollY } = useScroll();
  const backgroundPositionY = useTransform(scrollY, [0, 300], ['50%', '30%']);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const backgroundImage = isMobile ? BackGround2 : BackGround;

  return (
    <div className="relative min-h-screen flex items-center justify-start text-white overflow-hidden bg-black">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 z-0 bg-cover bg-center md:bg-center sm:bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          filter: 'brightness(1.0)',
          transformOrigin: 'center',
          backgroundPosition: 'center',
          backgroundPositionY,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      />

      {/* Gradient overlay for better content visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 md:from-black/60 md:via-black/20 md:to-black/60 z-10" />

      {/* Bottom fade effect for seamless transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/80 to-transparent z-15" />

      <div className="container-custom relative z-20 px-4 flex flex-col items-start gap-6 w-full pt-16">
        {/* Content placeholder (e.g., title or other elements) */}
      </div>

      {/* Responsive buttons positioning */}
      <motion.div
        className="absolute bottom-20 max-md:bottom-16 right-4 max-md:right-2 max-sm:right-1 flex flex-wrap justify-end gap-3 max-sm:gap-2 z-30"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.3,
              delayChildren: 2.0,
            },
          },
        }}
      >
        <motion.button
          className="group relative px-6 py-3 max-sm:px-4 max-sm:py-2 rounded-lg font-bold text-lg max-sm:text-base transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
          style={{
            backgroundColor: '#7f1d1d',
            color: '#FFFFFF',
            boxShadow: '0 4px 15px rgba(90, 0, 0, 0.4)',
          }}
          variants={buttonVariants}
        >
          <Link to="/projects/aethon" className="relative z-10">Explore Projects</Link>
          <div className="absolute inset-0 bg-red-700 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </motion.button>

        <motion.button
          className="group relative px-6 py-3 max-sm:px-4 max-sm:py-2 rounded-lg font-bold text-lg max-sm:text-base border-2 border-white transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
          style={{
            backgroundColor: 'transparent',
            color: '#FFFFFF',
            boxShadow: '0 4px 15px rgba(255, 255, 255, 0.2)',
          }}
          variants={buttonVariants}
        >
          <Link to="/about" className="relative z-10 group-hover:text-black transition-colors duration-300">Meet The Club</Link>
          <div className="absolute inset-0 bg-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </motion.button>
      </motion.div>

      <motion.a
        className="absolute bottom-8 max-md:bottom-4 left-0 right-0 mx-auto flex flex-col items-center text-white opacity-80 hover:opacity-100 transition-opacity z-30 group w-fit"
        href="#projects"
        initial="hidden"
        animate={["visible", "pulse"]}
        variants={scrollVariants}
      >
        <span
          className="text-sm mb-2 group-hover:text-red-400 transition-colors font-medium max-sm:text-xs"
          style={{ color: '#FFFFFF' }}
        >
          Scroll Down
        </span>
        <ChevronDown
          className="animate-bounce group-hover:text-red-400 transition-colors w-6 h-6 max-sm:w-5 max-sm:h-5"
          style={{ color: '#FFFFFF' }}
        />
      </motion.a>
    </div>
  );
};

export default Hero;