import React from 'react';

interface EdenredLogoProps {
  size?: number;
  className?: string;
}

export default function EdenredLogo({ size = 48, className = '' }: EdenredLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Red circle background */}
      <circle cx="100" cy="100" r="100" fill="#FF3D3D" />
      
      {/* White text "Edenred" */}
      <text
        x="100"
        y="115"
        fontFamily="Arial, sans-serif"
        fontSize="60"
        fontWeight="bold"
        fill="white"
        textAnchor="middle"
        letterSpacing="2"
      >
        Edenred
      </text>
    </svg>
  );
}
