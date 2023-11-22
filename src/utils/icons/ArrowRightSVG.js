import React from "react";

const ArrowRightSVG = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 13 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_42_1363)">
        <path
          d="M1.5708 1.5L10.5708 9L1.5708 16.5"
          stroke="#FFF"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_42_1363">
          <rect
            width="12"
            height="18"
            fill="white"
            transform="translate(0.0708008)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ArrowRightSVG;
