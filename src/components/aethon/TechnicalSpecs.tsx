import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import backgroundImage from './background.png';

import {
  Settings,
  Zap,
  Circle,
  Cog,
  TrendingUp,
  Fuel,
  Gauge,
  Battery,
  Wrench,
  Shield,
  Wind,
  Car,
} from 'lucide-react';

const tabs = [
  { id: 'aerodynamics', label: 'Aerodynamics', icon: Wind },
  { id: 'battery', label: 'Battery', icon: Battery },
  { id: 'chassis', label: 'Chassis', icon: Shield },
  { id: 'powertrain', label: 'Powertrain', icon: Zap },
  { id: 'dynamics', label: 'Vehicle Dynamics', icon: Car },
  { id: 'braking', label: 'Braking System', icon: Circle },
];

const specData = {
  aerodynamics: [
    { label: 'Bodywork Design', value: 'High Efficiency', description: 'Optimized for minimal drag', icon: Wind },
    { label: 'Drag Coefficient', value: 'Extremely Low', description: 'Advanced aerodynamic profile', icon: TrendingUp },
    { label: 'Cooling Flow', value: 'Optimized Mass Flow', description: 'Enhanced thermal management', icon: Fuel },
    { label: 'Panel Construction', value: 'Lightweight Sandwich', description: 'Composite materials', icon: Shield },
  ],
  battery: [
    { label: 'Battery Configuration', value: '4 Modules, 92 Cells', description: 'LiFePO₄ (CBAK 32140FS)', icon: Battery },
    { label: 'Voltage & Capacity', value: '72V 60Ah', description: '45kg with protection & electronics', icon: Zap },
    { label: 'Module Layout', value: '2354P Configuration', description: 'Electrical layout per module', icon: Cog },
    { label: 'Battery Management', value: 'Active Cell Balancing', description: 'Smart BMS system', icon: Settings },
  ],
  chassis: [
    { label: 'Material Grade', value: 'Chromoly 4130', description: 'ASTM 106 Grade specification', icon: Shield },
    { label: 'Design Optimization', value: 'Torsional Stiffness', description: 'Increased rigidity, reduced weight', icon: Wrench },
    { label: 'Stiffness Rating', value: '205 GPa', description: 'Superior structural integrity', icon: Gauge },
    { label: 'Chassis Mass', value: '66 kg', description: 'Lightweight construction', icon: Circle },
  ],
  powertrain: [
    { label: 'Peak Power Output', value: '11 kW', description: 'Maximum power delivery', icon: Zap },
    { label: 'Peak Torque', value: '55 Nm', description: 'Instant torque delivery', icon: TrendingUp },
    { label: 'Motor Configuration', value: '1 Rear QSM3B-A3000W', description: 'PMSM Mid-Drive Motor', icon: Settings },
    { label: 'Control System', value: 'Field Oriented Control', description: 'MTPA + regenerative braking', icon: Cog },
  ],
  dynamics: [
    { label: 'Chassis Mounting', value: 'Optimized Points', description: 'Aero & cooling performance', icon: Car },
    { label: 'Steering Geometry', value: 'Ackerman Optimized', description: 'Precision steering response', icon: Circle },
    { label: 'Front-End Design', value: 'High Rig Packaging', description: 'Enhanced airflow & steering', icon: Wind },
    { label: 'Suspension System', value: 'CNC Machined Devices', description: 'Precision alignment & ride', icon: Wrench },
  ],
  braking: [
    { label: 'Rear Disc System', value: '200mm Apache RTR 180', description: 'Single piston floating caliper', icon: Circle },
    { label: 'Master Cylinder', value: 'ByBre 17mm', description: 'Precision brake control', icon: Settings },
    { label: 'Hub Construction', value: 'CNC Machined EN8 Steel', description: 'Enhanced efficiency', icon: Wrench },
    { label: 'Performance Testing', value: 'Thoroughly Tested', description: 'Rigidity, performance & thermal', icon: Gauge },
  ]
};

function TechSpecs() {
  const [activeTab, setActiveTab] = useState('aerodynamics');
  const currentSpecs = specData[activeTab];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="relative z-10 py-12 flex justify-center px-4">
        <div
          className="max-w-[1250px] w-full backdrop-blur-xl border border-white/20 rounded-2xl shadow-[0_0_40px_#5c1515] px-6 md:px-12 py-12 relative overflow-hidden"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="absolute inset-0 bg-black/40 z-0 rounded-2xl" />
          <div className="relative z-10">
            {/* Title */}
            <div className="text-center pt-2 pb-8">
              <motion.h1
                className="text-5xl font-bold bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent mb-4"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Technical Specifications
              </motion.h1>
              <motion.div
                className="h-1.5 w-32 bg-gradient-to-r from-red-600 to-red-400 mx-auto rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '128px' }}
                transition={{ duration: 1, delay: 0.3 }}
              />
            </div>

            {/* Tabs */}
            <div className="flex justify-center pt-4 pb-10 px-4">
              <div className="flex flex-wrap justify-center gap-3 bg-gray-800/30 rounded-2xl p-4 backdrop-blur-lg border border-gray-700/50 max-w-5xl">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <motion.button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-500 relative overflow-hidden ${
                        activeTab === tab.id
                          ? 'bg-red-700 text-white shadow-xl shadow-red-700/40'
                          : 'text-gray-400 hover:text-white hover:bg-red-800/60'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon size={18} />
                      <span className="font-medium text-sm">{tab.label}</span>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Tab Title */}
            <motion.div
              className="flex items-center space-x-6 mb-12 px-4"
              key={activeTab}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gradient-to-br from-red-600 to-red-700 p-4 rounded-2xl shadow-lg shadow-red-600/25">
                {React.createElement(tabs.find(tab => tab.id === activeTab)?.icon || Settings, { size: 28 })}
              </div>
              <div>
                <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {tabs.find(tab => tab.id === activeTab)?.label}
                </h2>
                <motion.div
                  className="h-1 bg-gradient-to-r from-red-600 to-red-400 mt-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '150px' }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
              </div>
            </motion.div>

            {/* Specs Grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 pb-4 px-4"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.6 }}
              >
                {currentSpecs.map((spec, index) => (
                  <motion.div
                    key={spec.label}
                    className="bg-gradient-to-br from-[#2b0f0f] to-[#0f1a2b] hover:from-red-700 hover:to-red-600 rounded-xl p-6 text-white shadow-lg transition duration-300 transform hover:scale-105"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <spec.icon size={24} className="mb-4" />
                    <h3 className="text-xl font-bold mb-2">{spec.label}</h3>
                    <p className="text-lg mb-1">{spec.value}</p>
                    <p className="text-gray-300 text-sm">{spec.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechSpecs;
