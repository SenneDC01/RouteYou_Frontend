import React from 'react';

const KlokSVG = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_503_210)">
        <path
          d="M12.0003 23.0671C18.1124 23.0671 23.0673 18.1123 23.0673 12.0002C23.0673 5.88807 18.1124 0.933228 12.0003 0.933228C5.88819 0.933228 0.93335 5.88807 0.93335 12.0002C0.93335 18.1123 5.88819 23.0671 12.0003 23.0671Z"
          stroke="#1A614A"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          d="M12.0002 3.92249V12.0002L15.3276 15.3275"
          stroke="#1A614A"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};

export default KlokSVG;
