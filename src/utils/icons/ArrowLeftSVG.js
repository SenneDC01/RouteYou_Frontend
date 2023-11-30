import React from "react";

const ArrowLeftSVG = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 13 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_192_4666)">
        <path
          d="M10.5708 16.5L1.5708 9L10.5708 1.5"
          stroke="#FFF"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_192_4666">
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

export default ArrowLeftSVG;
