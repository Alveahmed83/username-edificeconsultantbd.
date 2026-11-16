import React from 'react';

interface EdificeLogoProps {
  className?: string;
  size?: number;
}

/**
 * Faithful vector reconstruction of the Edifice Consultants architectural emblem
 * from the official visiting card: 3x3 terracotta grid, dark L-frame shadow,
 * and diagonal brushed-steel louver cutting across the upper-right modules.
 */
export const EdificeLogo: React.FC<EdificeLogoProps> = ({
  className = '',
  size = 36,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* L-shaped architectural shadow frame (bottom & left) */}
      <path d="M12 22H24V78H80V90H12V22Z" fill="#18181B" />

      {/* 3x3 Terracotta Architectural Grid */}
      {/* Row 1 */}
      <rect x="24" y="12" width="18" height="20" fill="#DF522B" />
      <rect x="44" y="12" width="18" height="20" fill="#DF522B" />
      <rect x="64" y="12" width="18" height="20" fill="#DF522B" />

      {/* Row 2 */}
      <rect x="24" y="34" width="18" height="20" fill="#DF522B" />
      <rect x="44" y="34" width="18" height="20" fill="#DF522B" />
      <rect x="64" y="34" width="18" height="20" fill="#DF522B" />

      {/* Row 3 */}
      <rect x="24" y="56" width="18" height="20" fill="#DF522B" />
      <rect x="44" y="56" width="18" height="20" fill="#DF522B" />
      <rect x="64" y="56" width="18" height="20" fill="#DF522B" />

      {/* Grid hairline dividers */}
      <path
        d="M43 12V76M63 12V76M24 33H82M24 55H82"
        stroke="#18181B"
        strokeWidth="1.4"
      />

      {/* Diagonal brushed-steel architectural louver wedge */}
      <polygon points="34,36 90,22 90,34 34,54" fill="#9CA3AF" />
      <polygon points="34,54 90,34 90,38 34,58" fill="#27272A" opacity="0.7" />
      {/* Parallel louver fin lines */}
      <line x1="35" y1="39.5" x2="89" y2="25" stroke="#52525B" strokeWidth="1" />
      <line x1="35" y1="43.5" x2="89" y2="28" stroke="#52525B" strokeWidth="1" />
      <line x1="35" y1="47.5" x2="89" y2="31" stroke="#52525B" strokeWidth="1" />
      <line x1="35" y1="51.5" x2="89" y2="33.5" stroke="#3F3F46" strokeWidth="1" />
    </svg>
  );
};
