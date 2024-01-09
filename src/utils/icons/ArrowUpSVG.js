import React from 'react';

const ArrowUpSVG = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Arrow Up"
    >
      <g clipPath="url(#clip0_164_2808)">
        <path
          d="M1.5 11L9 2L16.5 11"
          stroke="#222222"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_164_2808">
          <rect
            width="18"
            height="12"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ArrowUpSVG;
