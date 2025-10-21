import React, { useState } from 'react';
import { ArrowLeft, Battery, Zap, Truck, Settings, ChevronDown, ChevronUp, Linkedin, Mail, User, Gauge, Power, Car, Clock, Award, Users, BarChart } from 'lucide-react';
import ebaja from '../components/ebaja/image/ebajaa.jpg';
import gabrin from '../components/ebaja/image/Gabrin.jpg';
import justinian from '../components/ebaja/image/Justinian.jpg';
import abrem from '../components/ebaja/image/Abrem.jpg';
import fathima from '../components/ebaja/image/fathima.jpg';
import viswas from '../components/ebaja/image/Viswas.jpg';
import albin from '../components/ebaja/image/Albin.jpg';
import alan from '../components/ebaja/image/Alan.jpg';
import abner from '../components/ebaja/image/Abner.jpg';
import dilshad from '../components/ebaja/image/Dilshad.jpg';
import remiel from '../assets/Remiel.jpg';
import aswinlal from '../components/ebaja/image/Aswin.jpeg';
import madhav from '../components/ebaja/image/Madhav.jpg';
import adarsh from '../components/ebaja/image/Adarsh.jpg';
import rohit from '../components/ebaja/image/Rohit.jpg';
import saurabh from '../components/ebaja/image/Saurabh.jpg';
import vyshnav from '../components/ebaja/image/Vyshnav.jpg';
import abhiram from '../components/ebaja/image/Abhiram.jpg';
import tony from '../components/ebaja/image/Tony.jpg';
import madhavs from '../components/ebaja/image/Madhavs.jpg';
import neha from '../components/ebaja/image/Neha.jpg';
import nehajose from '../components/ebaja/image/NehaJose.jpg';
import sonel from '../components/ebaja/image/Sonel.png';
import gowri from '../components/ebaja/image/Gowri.jpg';
import aswinmanoj from '../components/ebaja/image/Aswin.webp';
import madhavps from '../components/ebaja/image/MadhavPS.jpeg';
import alin from '../components/ebaja/image/Alin.jpeg';
import erin from '../components/ebaja/image/Erin.jpg';
import vivek from '../components/ebaja/image/Vivek.jpg';
import dhanya from '../components/ebaja/image/Dhanya.jpeg';
import allen from '../components/ebaja/image/AllenPeter.jpg';


const App: React.FC = () => {
  const [showAllMembers, setShowAllMembers] = useState(false);

  // Leadership Team (first 11 members)
  const leadershipTeam = [
    // First Row
    {
      name: 'Gabrin',
      role: 'Captain',
      image: gabrin,
      linkedin: 'https://linkedin.com',
      email: 'gabrinpaul39@gmail.com',
    },
    {
      name: 'Justinian',
      role: 'Manager',
      image: justinian,
      linkedin: 'https://linkedin.com',
      email: 'justinianjustus2003@gmail.com',
    },
    {
      name: 'Abrem',
      role: 'Vice-Captain',
      image: abrem,
      linkedin: 'https://linkedin.com',
      email: 'abremvathakkattel@gmail.com',
    },
    {
      name: 'Fathima Biju',
      role: 'Treasurer',
      image: fathima,
      linkedin: 'https://linkedin.com',
      email: ' fathimabijut@gmail.com ',
    },
    // Second Row
    {
      name: 'Viswas',
      role: 'Chassis & Fabrication Head',
      image: viswas,
      linkedin: 'https://linkedin.com',
      email: 'viswasillath@gmail.com',
    },
    {
      name: 'Albin',
      role: 'Vehicle Dynamics & Suspension Head',
      image: albin,
      linkedin: 'https://linkedin.com',
      email: ' albinbijuvarghese@gmail.com ',
    },
    {
      name: 'Alan',
      role: 'Design & Manufacturing Head',
      image: alan,
      linkedin: 'https://linkedin.com',
      email: 'alanvarghesethomas614@gmail.com',
    },
    {
      name: 'Abner',
      role: 'Brake & Drive Train Head',
      image: abner,
      linkedin: 'https://linkedin.com',
      email: 'abnerbiju2005@gmail.com',
    },
    // Third Row
    {
      name: 'Dilshad',
      role: 'HV (High Voltage) Head',
      image: dilshad,
      linkedin: 'https://linkedin.com',
      email: 'dilshadmuhammed.9153@gmail.com',
    },
    {
      name: 'Remiel',
      role: 'LV (Low Voltage) Head',
      image:remiel,
      linkedin: 'https://linkedin.com',
      email: 'remielgeorgevj@gmail.com ',
    },
    {
      name: 'Aswin Lal',
      role: 'Accumulator & BMS (Battery Management System) Head',
      image: aswinlal,
      linkedin: 'https://linkedin.com',
      email: 'ksaswinlal@gmail.com',
    },
  ];

  // Department Teams
  const departmentTeams = {
    chassisFabrication: [
      {
        name: 'Madhav',
        role: 'Junior Engineer',
        image: madhav,
        linkedin: 'https://linkedin.com',
        email: 'madhavskrishna96@gmail.com',
      },
  
      {
        name: 'Adarsh',
        role: 'Junior Engineer',
        image: adarsh,
        linkedin: 'https://linkedin.com',
        email: 'adzrshas@gmail.com',
      },
    ],
    vehicleDynamics: [
      {
        name: 'Abrem',
        role: 'Junior Engineer',
        image: abrem,
        linkedin: 'https://linkedin.com',
        email: 'abremvathakkattel@gmail.com',
      },
      {
        name: 'Rohit',
        role:'Junior Engineer',
        image: rohit,
        linkedin: 'https://linkedin.com',
        email: 'rohithmahesh1739@gmail.com',
      },
      {
        name: 'Saurabh',
        role: 'Junior Engineer',
        image: saurabh,
        linkedin: 'https://linkedin.com',
        email: 'saurabhswathy001@gmail.com',
      },
    ],
    designManufacturing: [
      {
        name: 'Justinian',
        role: 'Junior Engineer',
        image:justinian,
        linkedin: 'https://linkedin.com',
        email: 'justinianjustus2003@gmail.com',
      },
      {
        name: 'Vyshnav',
        role: 'Junior Engineer',
        image: vyshnav,
        linkedin: 'https://linkedin.com',
        email: 'vcd5vyshnav2017@gmail.com',
      },
      {
        name: 'Abhiram',
        role: 'Junior Engineer',
        image:abhiram,
        linkedin: 'https://linkedin.com',
        email: 'abhiramreji65@gmail ',
      },
    ],
    brakeDriveTrain: [
      {
        name: 'Tony',
        role: 'Junior Engineer',
        image: tony,
        linkedin: 'https://linkedin.com',
        email: 'tonysaju103@gmail.com',
      },
      {
        name: 'Madhav',
        role: 'Junior Engineer',
        image: madhavs,
        linkedin: 'https://linkedin.com',
        email: 'madhavshajirani@gmail.com',
      },
      {
        name: 'Neha',
        role: 'Junior Engineer',
        image: neha,
        linkedin: 'https://linkedin.com',
        email: 'nehaharikumar0@gmail.com',
      },
    ],
    hv: [
      {
        name: 'Sonel',
        role: 'Junior Engineer',
        image: sonel,
        linkedin: 'https://linkedin.com',
        email: 'sonelmshibu@gmail.com',
      },
      {
        name: 'Gowri',
        role: 'Junior Engineer',
        image:gowri,
        linkedin: 'https://linkedin.com',
        email: 'gowrixpriya@gmail.com',
      },
      {
        name: 'Neha Jose',
        role:'Junior Engineer',
        image: nehajose,
        linkedin: 'https://linkedin.com',
        email: 'nehajoseer24@gmail.com ',
      },
      {
        name: 'Aswin Manoj',
        role: 'Junior Engineer',
        image: aswinmanoj,
        linkedin: 'https://linkedin.com',
        email: 'aswinmanoj318@gmail.com',
      },
    ],
    lv: [
      {
        name: 'Madhav P S',
        role: 'Junior Engineer',
        image: madhavps,
        linkedin: 'https://linkedin.com',
        email: 'madhavps3012@gmail.com',
      },
      {
        name: 'Alin',
        role: 'Junior Engineer',
        image: alin,
        linkedin: 'https://linkedin.com',
        email: 'alincv66@gmail.com',
      },
      {
        name: 'Erin',
        role: 'Junior Engineer',
        image:erin,
        linkedin: 'https://linkedin.com',
        email: 'joshyerin33@gmail.com',
      },
    ],
    accumulatorsBms: [
      {
        name: 'Vivek Biju',
        role: 'Junior Engineer',
        image: vivek,
        linkedin: 'https://linkedin.com',
        email: 'vivekbiju03@gmail.com',
      },
      {
        name: 'Fathima Biju ',
        role: 'Junior Engineer',
        image: fathima,
        linkedin: 'https://linkedin.com',
        email: 'fathimabijut@gmail.com ',
      },
      {
        name: 'Dhanya S',
        role: 'Junior Engineer',
        image: dhanya,
        linkedin: 'https://linkedin.com',
        email: 'dhanyasuresh10d@gmail.com',
      },
      {
        name: 'Allen Peter',
        role: 'Junior Engineer',
        image: allen,
        linkedin: 'https://linkedin.com',
        email: 'allenpetergeogie@gmail.com',
      },
    ],
  };

  const visibleLeadership = showAllMembers ? leadershipTeam : leadershipTeam.slice(0, 4);

  // Member Card Component - Updated to use new design
  const MemberCard: React.FC<{ member: any; index: number; isLeadership?: boolean }> = ({ member, index, isLeadership = false }) => (
    <div className="alumni-card" title={member.name}>
      <img
        src={member.image}
        alt={member.name}
        className="alumni-image"
        loading="lazy"
      />
      <span className="alumni-name">{member.name}</span>
    </div>
  );

  // Department Section Component
  const DepartmentSection: React.FC<{ 
  title: string; 
  members: any[]; 
}> = ({ title, members }) => (
  <div className="mb-16">
    <div className="text-center mb-12">
      <h3 className="text-2xl md:text-3xl font-black mb-4 text-white tracking-tight">
        {title}
      </h3>
      <div className="w-16 h-1 bg-gradient-to-r from-[#5c1515] to-[#7f1d1d] mx-auto rounded-full"></div>
    </div>
    
    <div
      className={`max-w-6xl mx-auto ${
        members.length === 2
          ? 'flex justify-center gap-x-44 flex-wrap'
          : members.length === 3
          ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-8 place-items-center'
          : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-14 gap-y-10 place-items-center'
      }`}
    >
      {members.map((member, index) => (
        <MemberCard key={index} member={member} index={index} />
      ))}
    </div>
  </div>
);


  const specs = [
    { 
      label: 'Max Tractive System Power', 
      value: '9 kW', 
      icon: <Power className="h-5 w-5" />,
      description: 'Peak electrical power output',
      color: 'red'
    },
    { 
      label: 'System Voltage', 
      value: '72V', 
      icon: <Battery className="h-5 w-5" />,
      description: 'Operating voltage range',
      color: 'red'
    },
    { 
      label: 'Top Speed', 
      value: '70 kmph', 
      icon: <Gauge className="h-5 w-5" />,
      description: 'Maximum achievable speed',
      color: 'red'
    },
    { 
      label: 'Chassis Material', 
      value: 'Chromoly', 
      icon: <Car className="h-5 w-5" />,
      description: 'High-strength steel alloy',
      color: 'red'
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden relative">
      {/* GLOBAL Geometric Background Pattern - Visible Throughout Entire Website with darker red */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Large geometric shapes with darker red color */}
        <div className="absolute top-10 left-10 w-80 h-80 border-2 border-[#5c1515]/50 rotate-45 rounded-3xl"></div>
        <div className="absolute top-20 right-20 w-96 h-96 border-2 border-[#5c1515]/45 rotate-12 rounded-2xl"></div>
        <div className="absolute bottom-20 left-1/4 w-72 h-72 border-2 border-[#5c1515]/55 -rotate-12 rounded-xl"></div>
        <div className="absolute bottom-40 right-1/3 w-88 h-88 border-2 border-[#5c1515]/50 rotate-45 rounded-2xl"></div>
        
        {/* Medium geometric shapes */}
        <div className="absolute top-1/3 left-1/2 w-64 h-64 border-2 border-[#5c1515]/45 rotate-30 rounded-lg"></div>
        <div className="absolute top-60 right-1/4 w-56 h-56 border-2 border-[#5c1515]/50 -rotate-45 rounded-xl"></div>
        <div className="absolute bottom-1/3 left-20 w-68 h-68 border-2 border-[#5c1515]/45 rotate-12 rounded-2xl"></div>
        <div className="absolute top-40 left-1/3 w-52 h-52 border-2 border-[#5c1515]/50 -rotate-30 rounded-lg"></div>
        
        {/* Small geometric accents */}
        <div className="absolute top-80 left-1/3 w-32 h-32 border-2 border-[#5c1515]/60 rotate-45 rounded-lg"></div>
        <div className="absolute top-1/4 right-40 w-40 h-40 border-2 border-[#5c1515]/55 -rotate-30 rounded-xl"></div>
        <div className="absolute bottom-60 right-10 w-36 h-36 border-2 border-[#5c1515]/50 rotate-60 rounded-lg"></div>
        <div className="absolute top-96 left-20 w-28 h-28 border-2 border-[#5c1515]/55 rotate-15 rounded-md"></div>
        
        {/* Additional scattered shapes */}
        <div className="absolute top-32 right-1/2 w-44 h-44 border-2 border-[#5c1515]/45 rotate-75 rounded-xl"></div>
        <div className="absolute bottom-80 left-1/2 w-48 h-48 border-2 border-[#5c1515]/50 -rotate-20 rounded-lg"></div>
        <div className="absolute top-1/2 right-20 w-60 h-60 border-2 border-[#5c1515]/45 rotate-50 rounded-2xl"></div>
        
        {/* Diagonal lines with darker red */}
        <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-transparent via-[#5c1515]/35 to-transparent rotate-12"></div>
        <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-transparent via-[#5c1515]/40 to-transparent -rotate-12"></div>
        <div className="absolute top-0 left-1/2 w-1 h-full bg-gradient-to-b from-transparent via-[#5c1515]/30 to-transparent rotate-6"></div>
        <div className="absolute top-0 right-1/2 w-1 h-full bg-gradient-to-b from-transparent via-[#5c1515]/35 to-transparent -rotate-8"></div>
        
        {/* Floating dots with darker red */}
        <div className="absolute top-32 left-1/2 w-4 h-4 bg-[#5c1515]/70 rounded-full"></div>
        <div className="absolute top-96 right-1/4 w-5 h-5 bg-[#5c1515]/60 rounded-full"></div>
        <div className="absolute bottom-32 left-1/3 w-3 h-3 bg-[#5c1515]/65 rounded-full"></div>
        <div className="absolute bottom-80 right-1/2 w-4 h-4 bg-[#5c1515]/70 rounded-full"></div>
        <div className="absolute top-64 left-20 w-3 h-3 bg-[#5c1515]/60 rounded-full"></div>
        <div className="absolute bottom-96 right-40 w-5 h-5 bg-[#5c1515]/65 rounded-full"></div>
        
        {/* Additional geometric elements for racing aesthetic */}
        <div className="absolute top-20 left-1/2 w-24 h-2 bg-[#5c1515]/50 rotate-45"></div>
        <div className="absolute bottom-40 right-1/4 w-32 h-2 bg-[#5c1515]/45 -rotate-30"></div>
        <div className="absolute top-1/2 left-10 w-28 h-2 bg-[#5c1515]/50 rotate-60"></div>
        <div className="absolute bottom-20 left-1/2 w-20 h-2 bg-[#5c1515]/45 -rotate-45"></div>
        
        {/* Corner accent shapes */}
        <div className="absolute top-5 left-5 w-16 h-16 border-2 border-[#5c1515]/60 rotate-45"></div>
        <div className="absolute top-5 right-5 w-20 h-20 border-2 border-[#5c1515]/55 -rotate-30"></div>
        <div className="absolute bottom-5 left-5 w-18 h-18 border-2 border-[#5c1515]/60 rotate-60"></div>
        <div className="absolute bottom-5 right-5 w-22 h-22 border-2 border-[#5c1515]/55 -rotate-15"></div>
        
        {/* Extra geometric elements for more coverage */}
        <div className="absolute top-1/4 left-10 w-36 h-36 border-2 border-[#5c1515]/40 rotate-25 rounded-lg"></div>
        <div className="absolute bottom-1/4 right-10 w-42 h-42 border-2 border-[#5c1515]/45 -rotate-35 rounded-xl"></div>
        <div className="absolute top-3/4 left-1/3 w-38 h-38 border-2 border-[#5c1515]/40 rotate-55 rounded-md"></div>
        <div className="absolute bottom-1/2 right-1/3 w-34 h-34 border-2 border-[#5c1515]/45 -rotate-25 rounded-lg"></div>
        
        {/* More diagonal accents */}
        <div className="absolute top-1/3 left-0 w-1 h-2/3 bg-gradient-to-b from-transparent via-[#5c1515]/25 to-transparent rotate-15"></div>
        <div className="absolute bottom-1/3 right-0 w-1 h-2/3 bg-gradient-to-t from-transparent via-[#5c1515]/30 to-transparent -rotate-15"></div>
        
        {/* Additional floating elements */}
        <div className="absolute top-1/2 left-1/4 w-6 h-6 bg-[#5c1515]/50 rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-[#5c1515]/55 rounded-full"></div>
        <div className="absolute top-2/3 left-3/4 w-5 h-5 bg-[#5c1515]/50 rounded-full"></div>
      </div>

      {/* Hero Section with Background Image - Enhanced with larger heading */}
      <div className="relative w-full h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${ebaja})`,
          }}
        ></div>
        
        {/* Floating particles animation */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-3 h-3 bg-[#5c1515] rounded-full animate-ping opacity-75"></div>
          <div className="absolute top-40 right-32 w-2 h-2 bg-[#5c1515] rounded-full animate-pulse"></div>
          <div className="absolute bottom-32 left-40 w-2.5 h-2.5 bg-[#5c1515] rounded-full animate-bounce"></div>
          <div className="absolute top-60 left-1/3 w-2 h-2 bg-[#5c1515] rounded-full animate-ping delay-500"></div>
          <div className="absolute bottom-40 right-20 w-3 h-3 bg-[#5c1515] rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-80 right-1/4 w-2 h-2 bg-[#5c1515] rounded-full animate-bounce delay-700"></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10 flex items-center justify-center h-full">
  <div className="max-w-5xl mx-auto">
    <a href="/" className="inline-flex items-center text-gray-300 hover:text-[#5c1515] mb-8 transition-all duration-300 group">
      <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
      Back to Home
    </a>

    <div className="mb-6 animate-fadeIn">
      <span className="inline-block px-4 py-2 bg-[#5c1515] text-white font-semibold rounded-full text-xs tracking-widest uppercase shadow-md">
        Electric Off-Road Racing
      </span>
    </div>

    <h1
  className="text-white text-[8rem] md:text-[10rem] font-extrabold tracking-tight leading-none drop-shadow-[0_8px_20px_rgba(0,0,0,0.75)] animate-slideUp font-['Anton']"
>
  EBaja
</h1>

<p
  className="text-2xl md:text-3xl text-white mt-6 mb-12 font-medium tracking-wide animate-slideUp delay-200 drop-shadow-[0_3px_6px_rgba(0,0,0,0.6)]"
>
  Our cutting-edge electric Baja built for sustainable, high-performance racing.
</p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slideUp delay-300">
      <a 
        href="#technical-specs" 
        className="group px-8 py-3 bg-gradient-to-r from-[#5c1515] to-[#7f1d1d] hover:from-[#7f1d1d] hover:to-[#5c1515] text-white rounded-2xl font-semibold transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 shadow-xl hover:shadow-[#5c1515]/30"
      >
        <span className="flex items-center justify-center">
          View Specifications
          <Battery className="ml-2 h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
        </span>
      </a>
      <a 
        href="#team" 
        className="group px-8 py-3 bg-gradient-to-r from-[#5c1515] to-black hover:from-[#7f1d1d] hover:to-gray-900 text-white rounded-2xl font-semibold transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 shadow-xl hover:shadow-[#5c1515]/30"
      >
        <span className="flex items-center justify-center">
          Meet Our Team
          <User className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
        </span>
      </a>
    </div>
  </div>
</div>


        {/* Smooth transition gradient to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/90 via-black/60 to-transparent pointer-events-none"></div>
      </div>

      {/* Project Overview Section - Enhanced with Better Background Visibility */}
      <section className="py-24 relative overflow-hidden">
        {/* Enhanced Background with patterns visibility */}
        <div className="absolute inset-0 z-0">
          {/* Primary background with subtle transparency */}
          <div className="absolute inset-0 bg-black/85"></div>
          
          {/* Additional geometric elements specific to this section for enhanced visibility */}
          <div className="absolute top-20 left-20 w-48 h-48 border border-[#5c1515]/30 rotate-45 rounded-2xl"></div>
          <div className="absolute bottom-20 right-20 w-56 h-56 border border-[#5c1515]/25 -rotate-30 rounded-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-32 h-32 border border-[#5c1515]/35 rotate-60 rounded-xl"></div>
          <div className="absolute bottom-1/3 right-1/3 w-40 h-40 border border-[#5c1515]/30 -rotate-15 rounded-2xl"></div>
          
          {/* Floating accent dots */}
          <div className="absolute top-32 right-1/4 w-3 h-3 bg-[#5c1515]/60 rounded-full animate-pulse"></div>
          <div className="absolute bottom-40 left-1/3 w-4 h-4 bg-[#5c1515]/70 rounded-full animate-ping"></div>
          <div className="absolute top-2/3 right-20 w-2 h-2 bg-[#5c1515]/80 rounded-full animate-bounce"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Section with Coming Soon */}
            <div className="relative">
              <div className="absolute inset-0 border-2 border-[#5c1515]/30 rounded-lg transform translate-x-4 translate-y-4"></div>
              <div className="relative z-10 bg-black/90 backdrop-blur-sm rounded-lg shadow-2xl h-96 flex items-center justify-center border border-gray-800/50">
                <div className="text-center">
                  <div className="mb-4 p-4 bg-[#5c1515]/20 rounded-full w-fit mx-auto backdrop-blur-sm">
                    <Truck className="h-12 w-12 text-[#5c1515]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Coming Soon</h3>
                  <p className="text-gray-400">EBaja Vehicle Image</p>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 text-white tracking-tight">
                  Project Overview
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  EBaja ATV is our latest electric off-road vehicle engineered for high performance, efficiency, and reliability in BAJA SAE competitions. Designed for 70 kmph top speed with up to 4 hours of battery life, it features a 9 kW tractive system and a lightweight, high-strength Chromoly chassis.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="group flex items-start p-4 rounded-xl bg-black/40 backdrop-blur-sm border border-gray-800/50 hover:border-[#5c1515]/30 transition-all duration-300">
                  <div className="mr-4 mt-1 p-2 bg-[#5c1515]/20 rounded-md group-hover:bg-[#5c1515]/30 transition-colors duration-300">
                    <BarChart className="h-5 w-5 text-[#5c1515]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-white">Top Speed</h4>
                    <p className="text-sm text-gray-400">70 kmph</p>
                  </div>
                </div>

                <div className="group flex items-start p-4 rounded-xl bg-black/40 backdrop-blur-sm border border-gray-800/50 hover:border-[#5c1515]/30 transition-all duration-300">
                  <div className="mr-4 mt-1 p-2 bg-[#5c1515]/20 rounded-md group-hover:bg-[#5c1515]/30 transition-colors duration-300">
                    <Clock className="h-5 w-5 text-[#5c1515]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-white">Battery Life</h4>
                    <p className="text-sm text-gray-400">4 hours</p>
                  </div>
                </div>

                <div className="group flex items-start p-4 rounded-xl bg-black/40 backdrop-blur-sm border border-gray-800/50 hover:border-[#5c1515]/30 transition-all duration-300">
                  <div className="mr-4 mt-1 p-2 bg-[#5c1515]/20 rounded-md group-hover:bg-[#5c1515]/30 transition-colors duration-300">
                    <Award className="h-5 w-5 text-[#5c1515]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-white">Power</h4>
                    <p className="text-sm text-gray-400">9 kW</p>
                  </div>
                </div>

                <div className="group flex items-start p-4 rounded-xl bg-black/40 backdrop-blur-sm border border-gray-800/50 hover:border-[#5c1515]/30 transition-all duration-300">
                  <div className="mr-4 mt-1 p-2 bg-[#5c1515]/20 rounded-md group-hover:bg-[#5c1515]/30 transition-colors duration-300">
                    <Users className="h-5 w-5 text-[#5c1515]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-white">Team</h4>
                    <p className="text-sm text-gray-400">30 members</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Members Section */}
      <section id="team" className="py-20 relative z-10">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 text-white tracking-tight">
              Our Team
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#5c1515] to-[#7f1d1d] mx-auto mb-6 rounded-full"></div>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto font-light">
              Meet the skilled engineers and designers behind the EBaja project.
            </p>
          </div>

          {/* Leadership Team */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-black mb-4 text-white tracking-tight">
                Leadership Team
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-[#5c1515] to-[#7f1d1d] mx-auto rounded-full"></div>
            </div>

            {/* Grid logic with 3-member row centered and spaced */}
            {(() => {
              const rows = [];
              const total = visibleLeadership.length;

              for (let i = 0; i < total; i += 4) {
                const chunk = visibleLeadership.slice(i, i + 4);
                const isLastRowWithThree = i + 4 >= total && chunk.length === 3;

                rows.push(
                  <div
                    key={i}
                    className={
                      isLastRowWithThree
                        ? "flex justify-center space-x-8 sm:space-x-16 md:space-x-32 lg:space-x-44 gap-y-10 mb-16 flex-wrap"
                        : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 justify-items-center"
                    }
                  >
                    {chunk.map((member, index) => (
                      <MemberCard key={index} member={member} index={i + index} />
                    ))}
                  </div>
                );
              }

              return rows;
            })()}

            {/* Department Teams - Only show when expanded */}
            {showAllMembers && (
              <div className="space-y-20">
                <DepartmentSection 
                  title="Chassis & Fabrication" 
                  members={departmentTeams.chassisFabrication}
                />
                
                <DepartmentSection 
                  title="Vehicle Dynamics & Suspension" 
                  members={departmentTeams.vehicleDynamics}
                />
                
                <DepartmentSection 
                  title="Design & Manufacturing" 
                  members={departmentTeams.designManufacturing}
                />
                
                <DepartmentSection 
                  title="Brake & Drive Train" 
                  members={departmentTeams.brakeDriveTrain}
                />
                
                <DepartmentSection 
                  title="HV (High Voltage)" 
                  members={departmentTeams.hv}
                />
                
                <DepartmentSection 
                  title="LV (Low Voltage)" 
                  members={departmentTeams.lv}
                />
                
                <DepartmentSection 
                  title="Accumulators & BMS (Battery Management System)" 
                  members={departmentTeams.accumulatorsBms}
                />
              </div>
            )}

            <div className="flex justify-center mt-12">
              <button
                onClick={() => setShowAllMembers(!showAllMembers)}
                className="group flex items-center px-8 py-3 bg-gradient-to-r from-[#5c1515] via-[#5c1515] to-[#7f1d1d] hover:from-[#7f1d1d] hover:via-[#5c1515] hover:to-[#5c1515] text-white rounded-2xl font-semibold transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 shadow-xl hover:shadow-[#5c1515]/30"
              >
                {showAllMembers ? (
                  <>
                    <span className="mr-2">View Less</span>
                    <ChevronUp className="h-5 w-5 group-hover:-translate-y-1 transition-transform duration-300" />
                  </>
                ) : (
                  <>
                    <span className="mr-2">View All Departments</span>
                    <ChevronDown className="h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Technical Specifications */}
      <section id="technical-specs" className="py-20 relative z-10">
       <div className="container mx-auto px-6 relative z-10 text-white">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 text-white tracking-tight">
              Technical Specifications
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#5c1515] to-[#7f1d1d] mx-auto mb-6 rounded-full"></div>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto font-light">
              Advanced electric powertrain technology and rugged off-road components engineered for peak performance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
            {specs.map((spec, index) => {
              const colorClasses = {
                red: {
                  border: 'hover:border-[#5c1515]/60',
                  shadow: 'hover:shadow-[#5c1515]/20',
                  iconBg: 'from-[#5c1515] to-[#7f1d1d]',
                  iconHover: 'group-hover:shadow-[#5c1515]/30',
                  textColor: 'text-[#5c1515] group-hover:text-[#7f1d1d]',
                  valueGradient: 'from-[#5c1515] to-[#7f1d1d]',
                  glow: 'group-hover:bg-[#5c1515]/5'
                }
              };
              
              const colors = colorClasses[spec.color];
              
              return (
                <div 
                  key={index}
                  className={`group bg-black/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-800 ${colors.border} transition-all duration-700 hover:transform hover:scale-105 text-center hover:shadow-2xl ${colors.shadow} relative overflow-hidden`}
                >
                  {/* Glow effect on hover */}
                  <div className={`absolute inset-0 ${colors.glow} transition-all duration-700 opacity-0 group-hover:opacity-100 rounded-2xl`}></div>
                  
                  <div className="relative z-10">
                    <div className="mb-6 flex justify-center">
                      <div className={`p-3 bg-gradient-to-br ${colors.iconBg} rounded-2xl text-white group-hover:scale-110 transition-all duration-500 group-hover:rotate-6 shadow-lg ${colors.iconHover}`}>
                        {spec.icon}
                      </div>
                    </div>
                    <h3 className={`text-sm font-bold mb-3 ${colors.textColor} transition-colors uppercase tracking-wider`}>
                      {spec.label}
                    </h3>
                    <p className={`text-3xl font-black mb-3 bg-gradient-to-r ${colors.valueGradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
                      {spec.value}
                    </p>
                    <p className="text-gray-400 text-xs group-hover:text-gray-300 transition-colors leading-relaxed">
                      {spec.description}
                    </p>
                  </div>
                  
                  {/* Animated border effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${colors.valueGradient} opacity-20 blur-sm`}></div>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
            <div className="group bg-black/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-[#5c1515]/40 transition-all duration-500 hover:shadow-xl hover:shadow-[#5c1515]/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-[#5c1515]/5 transition-all duration-700 opacity-0 group-hover:opacity-100 rounded-2xl"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-8 text-[#5c1515] flex items-center group-hover:text-[#7f1d1d] transition-colors">
                  <div className="p-3 bg-gradient-to-r from-[#5c1515] to-[#7f1d1d] rounded-2xl mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-[#5c1515]/30">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  Electric Powertrain
                </h3>
                <div className="space-y-4">
                  {[
                    'Custom-designed high-efficiency BLDC motor with 9kW peak power',
                    'Advanced motor controller with regenerative braking capability',
                    '72V lithium-ion battery system with thermal management',
                    'Sophisticated battery management system (BMS) for safety',
                    'Multiple drive modes optimized for different terrain conditions'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start group/item">
                      <div className="flex-shrink-0 w-3 h-3 rounded-full bg-gradient-to-r from-[#5c1515] to-[#7f1d1d] mt-1.5 mr-4 group-hover/item:scale-125 transition-transform duration-300 shadow-sm group-hover/item:shadow-[#5c1515]/50"></div>
                      <span className="text-gray-300 group-hover/item:text-white transition-colors text-sm leading-relaxed group-hover:text-gray-200">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="group bg-black/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-[#5c1515]/40 transition-all duration-500 hover:shadow-xl hover:shadow-[#5c1515]/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-[#5c1515]/5 transition-all duration-700 opacity-0 group-hover:opacity-100 rounded-2xl"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-8 text-[#5c1515] flex items-center group-hover:text-[#7f1d1d] transition-colors">
                  <div className="p-3 bg-gradient-to-r from-[#5c1515] to-[#7f1d1d] rounded-2xl mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-[#5c1515]/30">
                    <Truck className="h-6 w-6 text-white" />
                  </div>
                  Off-Road Engineering
                </h3>
                <div className="space-y-4">
                  {[
                    'Chromoly steel chassis for superior strength-to-weight ratio',
                    'Long-travel suspension system for extreme terrain capability',
                    'High ground clearance for obstacle navigation and approach angles',
                    'All-terrain tire setup with aggressive tread pattern design',
                    'Water-resistant electrical components with IP67 rating'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start group/item">
                      <div className="flex-shrink-0 w-3 h-3 rounded-full bg-gradient-to-r from-[#5c1515] to-[#7f1d1d] mt-1.5 mr-4 group-hover/item:scale-125 transition-transform duration-300 shadow-sm group-hover/item:shadow-[#5c1515]/50"></div>
                      <span className="text-gray-300 group-hover/item:text-white transition-colors text-sm leading-relaxed group-hover:text-gray-200">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      
    </div>
  );
};

export default App;