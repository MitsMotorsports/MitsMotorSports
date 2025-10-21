import React from 'react';

const MemberCard: React.FC<{ member: any; index: number }> = ({ member, index }) => (
  <div className="alumni-card" title={member.name} key={index}>
    <img
      src={member.image}
      alt={member.name}
      className="alumni-image"
      loading="lazy"
    />
    <span className="alumni-name">{member.name}</span>
  </div>
);

export default MemberCard;
