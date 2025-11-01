import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';
import MemberCard from '../common/MemberCard';

// Import all team member images
import AdidevImg from './images/Adidev.jpg';
import BasilImg from './images/basil.jpg';
import ElmerImg from './images/Elmer.jpg';
import MathewsImg from './images/Mathews.jpg';
import AbhinavImg from './images/Abhinav.jpg';
import RahulImg from './images/Rahul.jpg';
import NithinImg from './images/Nithin.jpg';
import IrinImg from './images/Irin.jpg';
import NavaneethImg from './images/Navaneeth.jpg';
import ChandruImg from './images/Chandru.jpg';
import VigneshImg from './images/Vighnesh.jpg';
import JulianImg from './images/Julian.jpg';
import GhanasyamImg from './images/Ghanasyam.jpg';
import BharathImg from './images/Bharath.jpg';
import FahimImg from './images/Fahim.jpg';
import AchuthImg from './images/Achuth.jpg';
import AnanthImg from './images/Ananthakrishnan.jpg';
import RohitImg from './images/Rohit.jpg';
import VishnupriyaImg from './images/Vishnupriya.jpg';
import HruthikaImg from './images/Hruthika.jpg';
import RiyasImg from './images/Riyas.jpg';
import AsrayaImg from './images/Asraya.jpg';
import LeahImg from './images/Leah.jpg';
import KhaizImg from './images/Khais.jpg';
import aethonback from './images/aethonback.jpg';

// Team member data organized by departments
const teamData = {
  leadership: [
    { name: 'Adidev', role: 'Captain', image: AdidevImg, email: 'adidev@example.com' },
    { name: 'Basil', role: 'Manager', image: BasilImg, email: 'basil@example.com' },
    { name: 'Elmer', role: 'Co-Captain', image: ElmerImg, email: 'elmer@example.com' },
    { name: 'Nithin', role: 'Design and Manufacturing Head', image: NithinImg, email: 'nithin@example.com' },
    { name: 'Mathews', role: 'Vehicle Dynamics Head', image: MathewsImg, email: 'mathews@example.com' },
    { name: 'Julian', role: 'Breaks & Drive Train Head', image: JulianImg, email: 'julian@example.com' },
    { name: 'Rahul', role: 'Chasis & Fab Head', image: RahulImg, email: 'rahul@example.com' },
    { name: 'Abhinav', role: 'HV Head', image: AbhinavImg, email: 'abhinav@example.com' },
    { name: 'Irine', role: 'LV Head', image: IrinImg, email: 'irine@example.com' },
  ],
  treasurer: [
    { name: 'Navaneeth', image: NavaneethImg, email: 'navaneeth@example.com' },
    { name: 'Julian', image: JulianImg, email: 'julian@example.com' },
  ],
  hv: [
    { name: 'Chandrachoodan', image: ChandruImg, email: 'chandru@example.com' },
    { name: 'Vignesh', image: VigneshImg, email: 'vignesh@example.com' },
  ],
  lv: [
    { name: 'Ghanasyam',  image: GhanasyamImg, email: 'ghanasyam@example.com' },
    { name: 'Bharath', image: BharathImg, email: 'bharath@example.com' },
    { name: 'Fahim', image: FahimImg, email: 'fahim@example.com' },
  ],
  designManufacturing: [
    { name: 'Achuth',  image: AchuthImg, email: 'achuth@example.com' },
  ],
  vehicleDynamics: [
    { name: 'Ananthakrishnan', image: AnanthImg, email: 'ananth@example.com' },
  ],
  brakesDriveTrain: [
    { name: 'Rohit',  image: RohitImg, email: 'rohit@example.com' },
    { name: 'Vishnupriya',  image: VishnupriyaImg, email: 'vishnu@example.com' },
  ],
  chasisFoundation: [
    { name: 'Hruthika',  image: HruthikaImg, email: 'hruthika@example.com' },
    { name: 'Riyas', image: RiyasImg, email: 'riyas@example.com' },
  ],
  documentation: [
    { name: 'Asraya', image: AsrayaImg, email: 'asraya@example.com' },
    { name: 'Leah',  image: LeahImg, email: 'leah@example.com' },
  ],
  driver: [
    { name: 'Khaiz',  image: KhaizImg, email: 'khaiz@example.com' },
  ],
};

// Department Section Component
const DepartmentSection = ({ title, members, gridCols = "grid-cols-2 md:grid-cols-3" }) => (
  <div className="mb-16">
    <div className="text-center mb-8">
      <h3 className="text-2xl md:text-3xl font-black mb-4 text-white tracking-tight">
        {title}
      </h3>
      <div className="w-16 h-1 bg-gradient-to-r from-[#5c1515] to-[#7f1d1d] mx-auto rounded-full"></div>
    </div>
    
    <div className={`grid ${gridCols} gap-8 max-w-6xl mx-auto place-items-center`}>
      {members.map((member, index) => (
        <MemberCard key={index} member={member} index={index} />
      ))}
    </div>
  </div>
);

const TeamSection = () => {
  const [showAllMembers, setShowAllMembers] = useState(false);

  return (
    <section id="team" className="py-20 px-4 bg-black text-white">
      {/* Container with background */}
      <div
        className="max-w-7xl mx-auto rounded-xl overflow-hidden p-10 border border-white/20 shadow-[0_0_40px_#5c1515] ring-1 ring-white/10 backdrop-blur-sm"
        style={{
          backgroundImage: `url(${aethonback})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(0, 0, 0, 0.85)',
        }}
      >
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4 text-white">Project Team</h2>
          <p className="text-gray-300 max-w-xl mx-auto">
            Meet the talented individuals behind the Aethon V4 project.
          </p>
        </div>

        {/* Leadership Team - Always visible */}
        <DepartmentSection 
          title="Leadership Team" 
          members={teamData.leadership} 
          gridCols="grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
        />

        {/* Show remaining departments when expanded */}
        {showAllMembers && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-16"
          >
            <DepartmentSection 
              title="Treasurer" 
              members={teamData.treasurer} 
              gridCols="grid-cols-1 sm:grid-cols-2"
            />
            
            <DepartmentSection 
              title="HV(High Voltage)" 
              members={teamData.hv} 
              gridCols="grid-cols-1 sm:grid-cols-2"
            />
            
            <DepartmentSection 
              title="LV(Low Voltage)" 
              members={teamData.lv} 
              gridCols="grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
            />
            
            <DepartmentSection 
              title="Design & Manufacturing" 
              members={teamData.designManufacturing} 
              gridCols="grid-cols-1"
            />
            
            <DepartmentSection 
              title="Vehicle Dynamics" 
              members={teamData.vehicleDynamics} 
              gridCols="grid-cols-1"
            />
            
            <DepartmentSection 
              title="Brakes & Drive Train" 
              members={teamData.brakesDriveTrain} 
              gridCols="grid-cols-1 sm:grid-cols-2"
            />
            
            <DepartmentSection 
              title="Chassis & Foundation" 
              members={teamData.chasisFoundation} 
              gridCols="grid-cols-1 sm:grid-cols-2"
            />
            
            <DepartmentSection 
              title="Documentation" 
              members={teamData.documentation} 
              gridCols="grid-cols-1 sm:grid-cols-2"
            />
            
            <DepartmentSection 
              title="Driver" 
              members={teamData.driver} 
              gridCols="grid-cols-1"
            />
          </motion.div>
        )}

        {/* View More Button */}
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <button
            onClick={() => setShowAllMembers(!showAllMembers)}
            className="flex items-center space-x-2 px-6 py-3 bg-[#5c1515] hover:bg-[#7f1d1d] text-white rounded-xl transition duration-300 transform hover:scale-105"
          >
            <span>{showAllMembers ? 'View Less' : 'View All Departments'}</span>
            {showAllMembers ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;