import { Award, Users, Target, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';
import ClubLogo from '../assets/faviconLogo (1).jpg';

const About = () => {
  const features = [
    {
      icon: <Award className="h-6 w-6 text-[#7f1d1d]" />,
      title: 'Award-Winning Team',
      description: 'Multiple national awards for engineering excellence and innovation in motorsports.'
    },
    {
      icon: <Users className="h-6 w-6 text-[#7f1d1d]" />,
      title: 'Diverse Expertise',
      description: 'Team members specializing in mechanical, electrical, and computer science engineering.'
    },
    {
      icon: <Target className="h-6 w-6 text-[#7f1d1d]" />,
      title: 'Competitive Spirit',
      description: 'Participating in prestigious competitions across the country.'
    },
    {
      icon: <Wrench className="h-6 w-6 text-[#7f1d1d]" />,
      title: 'Hands-on Learning',
      description: 'Practical experience in designing, building, and testing real-world vehicles.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.2
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
        duration: 0.4
      }
    }
  };

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden relative font-['Poppins']">
      {/* Background Squares */}
      {/* ... (your full geometric pattern background remains here) ... */}

      {/* Hero Section */}
      <section className="relative z-20 min-h-screen flex items-center justify-center">
        <div className="text-center px-6">
          <motion.h1
            className="mt-20 text-5xl md:text-8xl font-bold mb-6 text-white drop-shadow-2xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {Array.from("ABOUT US").map((char, idx) => (
              <motion.span key={idx} variants={letterVariants} className="inline-block">
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.h1>
          <div className="w-32 h-1 bg-gradient-to-r from-[#7f1d1d] to-transparent mx-auto mb-8"></div>
          <p className="text-l md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed drop-shadow-lg mb-8">
            Discover the passion, innovation, and excellence that drives MITS Motorsports
          </p>
          <div className="flex justify-center items-center py-10">
            <img src={ClubLogo} alt="Club Logo" className="w-60 h-60 object-contain" />
          </div>
        </div>
      </section>

      {/* About & Features Section */}
      <section className="relative z-20 py-5 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-xl md:text-5xl font-extrabold mb-8 text-center text-white drop-shadow-lg"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            {Array.from("About MITS Motorsports").map((char, idx) => (
              <motion.span key={idx} variants={letterVariants} className="inline-block">
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.h2>

          <div className="bg-black/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-[#7f1d1d]/30">
            <p className="text-gray-200 text-l md:text-xl leading-relaxed mb-8">
              MITS Motorsports is a student-run organization that designs, builds, and races vehicles for various competitions. Our team is composed of passionate engineering students dedicated to applying theoretical knowledge to practical challenges.
            </p>

            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white drop-shadow-md">Our Mission</h3>
            <p className="text-gray-200 text-l md:text-xl leading-relaxed mb-12">
              To provide students with hands-on experience in automotive engineering and create innovative solutions that push the boundaries of motorsport technology. We aim to nurture the next generation of engineering talent through practical application of classroom knowledge.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start bg-black/40 rounded-xl p-6 border border-[#7f1d1d]/20 hover:border-[#7f1d1d]/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="mr-4 p-2 bg-[#7f1d1d]/20 rounded-lg">{feature.icon}</div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-white">{feature.title}</h4>
                    <p className="text-gray-200">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
