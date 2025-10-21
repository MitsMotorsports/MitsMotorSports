import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  link: string;
  index: number;
}

const ProjectCard = ({ title, description, image, link, index }: ProjectCardProps) => {
  return (
    <motion.div
      className={`group bg-gradient-to-br from-red-900 via-black to-red-900 rounded-xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-red-700 transition-shadow duration-500
        ${!image ? 'flex flex-col justify-center items-center text-center py-12 px-6' : ''}
      `}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      {image && (
        <div className="h-60 overflow-hidden rounded-t-xl">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700 ease-out"
          />
        </div>
      )}

      <div className={`p-6 text-white ${!image ? 'text-center' : ''}`}>
        <h3 className="text-3xl font-extrabold mb-3 drop-shadow-md">{title}</h3>
        <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl mb-5 drop-shadow-sm">
  {description}
</p>

        <div className="mt-4">
          <Link
            to={link}
            className="inline-flex items-center text-red-400 hover:text-red-600 font-semibold transition-colors duration-300"
          >
            Learn more
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
