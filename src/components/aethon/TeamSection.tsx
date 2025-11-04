import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';
import MemberCard from '../common/MemberCard';

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
import nikhilImg from './images/Nikhil.jpg';
import venuImg from './images/Venugopalan.jpg';

// ======================
// Team member data
// ======================
const teamData = {
  leadership: [
    { name: 'Adidev', role: 'Captain', image: AdidevImg },
    { name: 'Basil', role: 'Manager', image: BasilImg },
    { name: 'Elmer', role: 'Co-Captain', image: ElmerImg },
    { name: 'Nithin', role: 'Design and Manufacturing Head', image: NithinImg },
    { name: 'Mathews', role: 'Vehicle Dynamics Head', image: MathewsImg },
    { name: 'Julian', role: 'Brakes & Drive Train Head', image: JulianImg },
    { name: 'Rahul', role: 'Chassis & Fabrication Head', image: RahulImg },
    { name: 'Abhinav', role: 'High Voltage Head', image: AbhinavImg },
    { name: 'Irine', role: 'Low Voltage Head', image: IrinImg },
  ],
  treasurer: [
    { name: 'Navaneeth', image: NavaneethImg },
    { name: 'Julian', image: JulianImg },
  ],
  hv: [
    { name: 'Chandrachoodan', image: ChandruImg },
    { name: 'Vignesh', image: VigneshImg },
  ],
  lv: [
    { name: 'Ghanasyam', image: GhanasyamImg },
    { name: 'Bharath', image: BharathImg },
    { name: 'Fahim', image: FahimImg },
  ],
  designManufacturing: [
    { name: 'Achuth', image: AchuthImg },
  ],
  vehicleDynamics: [
    { name: 'Ananthakrishnan', image: AnanthImg },
  ],
  brakesDriveTrain: [
    { name: 'Rohit', image: RohitImg },
    { name: 'Vishnupriya', image: VishnupriyaImg },
  ],
  chasisFoundation: [
    { name: 'Hruthika', image: HruthikaImg },
    { name: 'Riyas', image: RiyasImg },
  ],
  documentation: [
    { name: 'Asraya', image: AsrayaImg },
    { name: 'Leah', image: LeahImg },
  ],
  driver: [
    { name: 'Khaiz', image: KhaizImg },
  ],
  facultyLead: [
    { name: 'Dr.Nikhil M Thoppil', role: 'Faculty Lead', image: nikhilImg },
    { name: 'Mr.Venugopalan Kurupath', role: 'Faculty Lead', image: venuImg },
  ],
};

// ======================
// Department Section Component
// ======================
const DepartmentSection = ({ title, members, gridCols = "grid-cols-2 md:grid-cols-3", showRoles = false }) => (
  <div className="mb-16">
    <div className="text-center mb-8">
      <h3 className="text-2xl md:text-3xl font-black mb-4 text-white tracking-tight">
        {title}
      </h3>
      <div className="w-16 h-1 bg-gradient-to-r from-[#5c1515] to-[#7f1d1d] mx-auto rounded-full"></div>
    </div>
    
    <div className={`grid ${gridCols} gap-8 max-w-6xl mx-auto place-items-center`}>
      {members.map((member, index) => (
        <MemberCard key={index} member={member} index={index} showRole={showRoles} />
      ))}
    </div>
  </div>
);

// ======================
// Team Section
// ======================
const TeamSection = () => {
  const [showAllMembers, setShowAllMembers] = useState(false);

  return (
    <section id="team" className="py-20 px-4 bg-black text-white">
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

        {/* ✅ Leadership Team (roles visible) */}
        <DepartmentSection 
          title="Leadership Team" 
          members={teamData.leadership} 
          gridCols="grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
          showRoles={true}
        />

        {/* Expandable other departments */}
        {showAllMembers && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-16"
          >
            <DepartmentSection title="Treasurer" members={teamData.treasurer} gridCols="grid-cols-1 sm:grid-cols-2" />
            <DepartmentSection title="HV (High Voltage)" members={teamData.hv} gridCols="grid-cols-1 sm:grid-cols-2" />
            <DepartmentSection title="LV (Low Voltage)" members={teamData.lv} gridCols="grid-cols-1 sm:grid-cols-2 md:grid-cols-3" />
            <DepartmentSection title="Design & Manufacturing" members={teamData.designManufacturing} gridCols="grid-cols-1" />
            <DepartmentSection title="Vehicle Dynamics" members={teamData.vehicleDynamics} gridCols="grid-cols-1" />
            <DepartmentSection title="Brakes & Drive Train" members={teamData.brakesDriveTrain} gridCols="grid-cols-1 sm:grid-cols-2" />
            <DepartmentSection title="Chassis & Foundation" members={teamData.chasisFoundation} gridCols="grid-cols-1 sm:grid-cols-2" />
            <DepartmentSection title="Documentation" members={teamData.documentation} gridCols="grid-cols-1 sm:grid-cols-2" />
            <DepartmentSection title="Driver" members={teamData.driver} gridCols="grid-cols-1" />
            {/* ✅ Faculty Lead also shows roles */}
            <DepartmentSection title="Faculty Lead" members={teamData.facultyLead} gridCols="grid-cols-1 sm:grid-cols-2" showRoles={true} />
          </motion.div>
        )}

        {/* Toggle button */}
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
