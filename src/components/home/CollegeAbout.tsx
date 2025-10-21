import { motion } from 'framer-motion';
import MitsLogo from '../../assets/MITS_Logo_updated-removebg-preview.png';
import AboutBg from '../../assets/Mitsbg.jpg';

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' }
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: 'easeOut', delay: 0.3 }
  },
};

const textVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: 'easeOut', delay: 0.3 }
  },
};

const bgFadeInVariant = {
  hidden: { opacity: 0, scale: 1.05 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.2, ease: 'easeOut' },
  },
};

const CollegeAbout = () => {
  return (
    <section className="relative max-w-7xl mx-auto my-20 px-6 md:px-12 rounded-xl shadow-2xl overflow-hidden bg-transparent">
      {/* Geometric Background Pattern - Confined to CollegeAbout Section */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Large geometric shapes */}
        <div className="absolute top-10 left-10 w-80 h-80 border-2 border-[#7f1d1d]/50 rotate-45 rounded-3xl"></div>
        <div className="absolute top-20 right-20 w-96 h-96 border-2 border-[#7f1d1d]/45 rotate-12 rounded-2xl"></div>
        <div className="absolute bottom-20 left-1/4 w-72 h-72 border-2 border-[#7f1d1d]/55 -rotate-12 rounded-xl"></div>
        <div className="absolute bottom-40 right-1/3 w-88 h-88 border-2 border-[#7f1d1d]/50 rotate-45 rounded-2xl"></div>

        {/* Medium geometric shapes */}
        <div className="absolute top-1/3 left-1/2 w-64 h-64 border-2 border-[#7f1d1d]/45 rotate-30 rounded-lg"></div>
        <div className="absolute top-60 right-1/4 w-56 h-56 border-2 border-[#7f1d1d]/50 -rotate-45 rounded-xl"></div>
        <div className="absolute bottom-1/3 left-20 w-68 h-68 border-2 border-[#7f1d1d]/45 rotate-12 rounded-2xl"></div>
        <div className="absolute top-40 left-1/3 w-52 h-52 border-2 border-[#7f1d1d]/50 -rotate-30 rounded-lg"></div>

        {/* Small geometric accents */}
        <div className="absolute top-80 left-1/3 w-32 h-32 border-2 border-[#7f1d1d]/60 rotate-45 rounded-lg"></div>
        <div className="absolute top-1/4 right-40 w-40 h-40 border-2 border-[#7f1d1d]/55 -rotate-30 rounded-xl"></div>
        <div className="absolute bottom-60 right-10 w-36 h-36 border-2 border-[#7f1d1d]/50 rotate-60 rounded-lg"></div>
        <div className="absolute top-96 left-20 w-28 h-28 border-2 border-[#7f1d1d]/55 rotate-15 rounded-md"></div>

        {/* Additional scattered shapes */}
        <div className="absolute top-32 right-1/2 w-44 h-44 border-2 border-[#7f1d1d]/45 rotate-75 rounded-xl"></div>
        <div className="absolute bottom-80 left-1/2 w-48 h-48 border-2 border-[#7f1d1d]/50 -rotate-20 rounded-lg"></div>
        <div className="absolute top-1/2 right-20 w-60 h-60 border-2 border-[#7f1d1d]/45 rotate-50 rounded-2xl"></div>

        {/* Diagonal lines */}
        <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-transparent via-[#7f1d1d]/35 to-transparent rotate-12"></div>
        <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-transparent via-[#7f1d1d]/40 to-transparent -rotate-12"></div>
        <div className="absolute top-0 left-1/2 w-1 h-full bg-gradient-to-b from-transparent via-[#7f1d1d]/30 to-transparent rotate-6"></div>
        <div className="absolute top-0 right-1/2 w-1 h-full bg-gradient-to-b from-transparent via-[#7f1d1d]/35 to-transparent -rotate-8"></div>

        {/* Floating dots */}
        <div className="absolute top-32 left-1/2 w-4 h-4 bg-[#7f1d1d]/70 rounded-full"></div>
        <div className="absolute top-96 right-1/4 w-5 h-5 bg-[#7f1d1d]/60 rounded-full"></div>
        <div className="absolute bottom-32 left-1/3 w-3 h-3 bg-[#7f1d1d]/65 rounded-full"></div>
        <div className="absolute bottom-80 right-1/2 w-4 h-4 bg-[#7f1d1d]/70 rounded-full"></div>
        <div className="absolute top-64 left-20 w-3 h-3 bg-[#7f1d1d]/60 rounded-full"></div>
        <div className="absolute bottom-96 right-40 w-5 h-5 bg-[#7f1d1d]/65 rounded-full"></div>

        {/* Additional geometric elements */}
        <div className="absolute top-20 left-1/2 w-24 h-2 bg-[#7f1d1d]/50 rotate-45"></div>
        <div className="absolute bottom-40 right-1/4 w-32 h-2 bg-[#7f1d1d]/45 -rotate-30"></div>
        <div className="absolute top-1/2 left-10 w-28 h-2 bg-[#7f1d1d]/50 rotate-60"></div>
        <div className="absolute bottom-20 left-1/2 w-20 h-2 bg-[#7f1d1d]/45 -rotate-45"></div>

        {/* Corner accent shapes */}
        <div className="absolute top-5 left-5 w-16 h-16 border-2 border-[#7f1d1d]/60 rotate-45"></div>
        <div className="absolute top-5 right-5 w-20 h-20 border-2 border-[#7f1d1d]/55 -rotate-30"></div>
        <div className="absolute bottom-5 left-5 w-18 h-18 border-2 border-[#7f1d1d]/60 rotate-60"></div>
        <div className="absolute bottom-5 right-5 w-22 h-22 border-2 border-[#7f1d1d]/55 -rotate-15"></div>

        {/* Extra geometric elements */}
        <div className="absolute top-1/4 left-10 w-36 h-36 border-2 border-[#7f1d1d]/40 rotate-25 rounded-lg"></div>
        <div className="absolute bottom-1/4 right-10 w-42 h-42 border-2 border-[#7f1d1d]/45 -rotate-35 rounded-xl"></div>
        <div className="absolute top-3/4 left-1/3 w-38 h-38 border-2 border-[#7f1d1d]/40 rotate-55 rounded-md"></div>
        <div className="absolute bottom-1/2 right-1/3 w-34 h-34 border-2 border-[#7f1d1d]/45 -rotate-25 rounded-lg"></div>

        {/* More diagonal accents */}
        <div className="absolute top-1/3 left-0 w-1 h-2/3 bg-gradient-to-b from-transparent via-[#7f1d1d]/25 to-transparent rotate-15"></div>
        <div className="absolute bottom-1/3 right-0 w-1 h-2/3 bg-gradient-to-t from-transparent via-[#7f1d1d]/30 to-transparent -rotate-15"></div>

        {/* Additional floating elements */}
        <div className="absolute top-1/2 left-1/4 w-6 h-6 bg-[#7f1d1d]/50 rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-[#7f1d1d]/55 rounded-full"></div>
        <div className="absolute top-2/3 left-3/4 w-5 h-5 bg-[#7f1d1d]/50 rounded-full"></div>
      </div>

      {/* Background Image with radial mask and fade-in */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center z-0 rounded-xl"
        variants={bgFadeInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        style={{
          backgroundImage: `url(${AboutBg})`,
          maskImage:
            'radial-gradient(circle at center, rgba(0,0,0,1) 40%, rgba(0,0,0,0.6) 70%, rgba(0,0,0,0) 100%)',
          WebkitMaskImage:
            'radial-gradient(circle at center, rgba(0,0,0,1) 40%, rgba(0,0,0,0.6) 70%, rgba(0,0,0,0) 100%)',
          filter: 'blur(0.5px) brightness(0.85)',
          transformOrigin: 'center',
        }}
      />

      {/* Gradient overlay for soft transparency */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-900/30 via-transparent to-transparent opacity-30 z-10 rounded-xl" />

      {/* Foreground Content */}
      <motion.section
        className="relative z-20 flex flex-col md:flex-row items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.div
          className="md:w-1/2 p-6 md:p-12"
          variants={textVariants}
        >
          <h2
            className="text-4xl font-extrabold text-white mb-4 drop-shadow-lg font-poppins"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Muthoot Institute of Technology and Science
          </h2>
          <p
            className="text-gray-300 text-l leading-relaxed drop-shadow-sm font-poppins"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            A premier institute dedicated to fostering innovation, academic excellence, and
            cutting-edge research in engineering and technology. We nurture future leaders
            by providing world-class education in a vibrant, collaborative environment.
          </p>
        </motion.div>

        <motion.div
          className="md:w-1/2 flex justify-center md:justify-end p-6 md:p-12 md:pr-0 md:translate-x-12"
          variants={imageVariants}
        >
          <img
            src={MitsLogo}
            alt="MITS Motorsports Logo"
            className="w-72 h-auto object-contain rounded-xl shadow-2xl"
          />
        </motion.div>
      </motion.section>
    </section>
  );
};

export default CollegeAbout;