import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import { Clock, Award, Users, BarChart } from 'lucide-react';
import gokart from './aethon.jpg';

const ProjectOverview = () => {
  return (
    <section className="section-padding relative bg-black overflow-hidden mt-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${gokart})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>
      </div>

      {/* Container with border/glow */}
      <div className="max-w-7xl mx-auto relative z-10 rounded-xl overflow-hidden p-10 border border-white/20 shadow-[0_0_40px_#5c1515] ring-1 ring-white/10 backdrop-blur-sm">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 border-2 border-primary-500/30 rounded-lg transform translate-x-4 translate-y-4"></div>
            <img
              src={gokart}
              alt="Aethon V4"
              className="rounded-lg shadow-2xl relative z-10"
            />
          </motion.div>

          <div>
            <SectionTitle
              title="Project Overview"
              subtitle="Aethon V4 is our latest electric GoKart engineered for high speed, efficiency, and reliability in GKDC Season 13. Designed for 80 kmph top speed with up to 1 hour of battery life, it features a 7.5 kW tractive system and a lightweight, high-strength chassis."
              light
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <motion.div
                className="flex items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="mr-4 mt-1 p-2 bg-primary-500/20 rounded-md">
                  <BarChart className="h-5 w-5 text-primary-400" />
                </div>
                <div>
                  <h4 className="font-medium mb-1 text-white">Top Speed</h4>
                  <p className="text-sm text-gray-400">80 kmph</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="mr-4 mt-1 p-2 bg-primary-500/20 rounded-md">
                  <Clock className="h-5 w-5 text-primary-400" />
                </div>
                <div>
                  <h4 className="font-medium mb-1 text-white">Battery Life</h4>
                  <p className="text-sm text-gray-400">1 hour</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="mr-4 mt-1 p-2 bg-primary-500/20 rounded-md">
                  <Award className="h-5 w-5 text-primary-400" />
                </div>
                <div>
                  <h4 className="font-medium mb-1 text-white">Power</h4>
                  <p className="text-sm text-gray-400">7.5 kW</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="mr-4 mt-1 p-2 bg-primary-500/20 rounded-md">
                  <Users className="h-5 w-5 text-primary-400" />
                </div>
                <div>
                  <h4 className="font-medium mb-1 text-white">Team</h4>
                  <p className="text-sm text-gray-400">24 members</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;
