import React from "react";

const ArrowDownSVG = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_61_6970)">
        <path
          d="M16.5 2L9 11L1.5 2"
          stroke="#222222"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_61_6970">
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

export default ArrowDownSVG;
