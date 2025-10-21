import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  titleClassName?: string;
  subtitleClassName?: string;
}

const SectionTitle = ({
  title,
  subtitle,
  centered = false,
  titleClassName = '',
  subtitleClassName = '',
}: SectionTitleProps) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center mx-auto max-w-4xl' : ''}`}>
      <motion.h2
        className={`text-4xl md:text-5xl font-bold relative inline-block ${titleClassName} ${
          centered ? 'after:left-1/2 after:-translate-x-1/2' : ''
        }`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          className={`mt-6 text-lg md:text-xl text-secondary-300 ${subtitleClassName} ${
            centered ? 'mx-auto' : ''
          }`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionTitle;
