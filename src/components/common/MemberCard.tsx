import React from 'react';

interface MemberCardProps {
  member: {
    name: string;
    image: string;
    role?: string;
  };
  index: number;
  showRole?: boolean; 
}

const MemberCard: React.FC<MemberCardProps> = ({ member, index, showRole = false }) => (
  <div
    className="alumni-card text-center transition-transform transform hover:scale-105 duration-300"
    title={member.name}
    key={index}
  >
    <img
      src={member.image}
      alt={member.name}
      className="alumni-image w-40 h-40 object-cover rounded-full border-4 border-[#7f1d1d] mb-3"
      loading="lazy"
    />

    {/* Name */}
    <span className="alumni-name block text-white font-semibold text-lg">
      {member.name}
    </span>

    {/* ✅ Role (straight font, clean look) */}
    {showRole && member.role && (
      <span className="alumni-role block text-gray-300 text-sm font-medium mt-1">
        {member.role}
      </span>
    )}
  </div>
);

export default MemberCard;
