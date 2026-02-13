import React from 'react';

/**
 * SchematicSVG Component
 * Robot assembly schematic SVG for industrial visual motif
 */
const SchematicSVG = ({ width = 100, height = 100, style = {}, className = '' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      className={className}
    >
      {/* Robot joint connection */}
      <circle cx="50" cy="50" r="15" fill="#f97316" stroke="#fb923c" strokeWidth="2"/>
      <rect x="35" y="20" width="30" height="60" rx="5" fill="none" stroke="#fb923c" strokeWidth="2"/>
      <circle cx="50" cy="20" r="8" fill="#1e293b" stroke="#f97316" strokeWidth="2"/>
      <circle cx="50" cy="80" r="8" fill="#1e293b" stroke="#f97316" strokeWidth="2"/>
      {/* Grid lines */}
      <line x1="10" y1="50" x2="90" y2="50" stroke="#475569" strokeWidth="1" strokeDasharray="2,2"/>
      <line x1="50" y1="10" x2="50" y2="90" stroke="#475569" strokeWidth="1" strokeDasharray="2,2"/>
    </svg>
  );
};

export default SchematicSVG;