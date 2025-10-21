import React from 'react';
import { motion } from 'framer-motion';

type TechSpecCardProps = {
  label: string;
  value: string;
  index: number;
};

const TechSpecCard: React.FC<TechSpecCardProps> = ({ label, value, index }) => {
  return (
    <motion.div
      className="bg-gray-900 p-6 rounded-xl shadow-md border border-gray-800 hover:border-blue-500 transition-colors"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <h4 className="text-sm font-medium text-gray-400 mb-1">{label}</h4>
      <p className="text-lg font-semibold text-white">{value}</p>
    </motion.div>
  );
};

export default TechSpecCard;