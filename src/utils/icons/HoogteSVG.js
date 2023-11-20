import React from "react";

const HoogteSVG = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_503_214)">
        <g clipPath="url(#clip1_503_214)">
          <path
            d="M12.1116 23.2812C18.2829 23.2812 23.2858 18.3282 23.2858 12.2184C23.2858 6.10862 18.2829 1.15564 12.1116 1.15564C5.94033 1.15564 0.9375 6.10862 0.9375 12.2184C0.9375 18.3282 5.94033 23.2812 12.1116 23.2812Z"
            stroke="#1A614A"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M7.83569 16.042L16.3585 7.60413M16.3585 7.60413H11.4009M16.3585 7.60413V12.5126"
            stroke="#1A614A"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_503_214">
          <rect width="24" height="24" fill="white" />
        </clipPath>
        <clipPath id="clip1_503_214">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default HoogteSVG;
