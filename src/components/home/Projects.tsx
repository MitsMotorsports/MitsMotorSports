import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import ProjectCard from '../common/ProjectCard';
import Aethon from '../../assets/Garage_upscaled.jpg';
//import ProjectBg from '../../assets/fkdc2.jpg';


const Projects = () => {
  const projects = [
    {
      title: 'Aethon V4',
      description:
        'Aethon V4 is our latest electric GoKart, built for GKDC Season 13 with a 7.5 kW motor, 80 kmph top speed, 1-hour battery life, and a lightweight, high-strength chassis.',
      image: Aethon,
      link: '/projects/aethon',
    },
    {
      title: 'EBaja',
      description:
        'Ebaja ATV is engineered for the SAE Ebaja Challenge, featuring a 9 kW tractive system, advanced torque vectoring, lightweight design, and up to 4 hours of battery life for exceptional performance and durability on all terrains',
      // No image for EBaja
      link: '/projects/ebaja',
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Foreground Content */}
      <div className="relative container-custom text-white z-20">
        <SectionTitle
          title="Our Projects"
          subtitle="We design and build innovative vehicles for various competitions. Each project involves extensive research, design, testing, and manufacturing phases."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
              index={index}
            />
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-6 text-secondary-300">
            Our projects are the result of teamwork, innovation, and dedication from all our members.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;