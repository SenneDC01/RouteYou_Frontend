import React from "react";

const LocationSVG = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 25 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_578_2371)">
        <path
          d="M6.03114 24.991H18.514M10.189 2.14191C4.33516 4.05673 3.13416 11.3255 7.03675 15.3884L12.2732 20.8399L17.5097 15.3884C21.4109 11.3255 20.2099 4.05673 14.3574 2.14191C13.0006 1.69822 11.5458 1.69822 10.189 2.14191Z"
          stroke="#1A614A"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
      </g>
      <defs>
        <clipPath id="clip0_578_2371">
          <rect
            width="25"
            height="25"
            fill="white"
            transform="translate(0 0.900024)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default LocationSVG;
