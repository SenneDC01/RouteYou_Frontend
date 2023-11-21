import React from "react";

const RouteSVG = ({ width, height, fill = "none" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 31"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_578_2364)">
        <path
          d="M15.8219 22.5L15.0387 22.0205L14.2555 22.5L8.03085 26.3108L9.69052 19.0944L9.89111 18.2222L9.21882 17.6314L3.66888 12.7545L10.9523 12.1277L11.8575 12.0498L12.2077 11.2115L15.0387 4.43619L17.8696 11.2115L18.2199 12.0498L19.1251 12.1277L26.4085 12.7545L20.8585 17.6314L20.1863 18.2222L20.3868 19.0944L22.0465 26.3108L15.8219 22.5Z"
          stroke="#1A614A"
          strokeWidth="3"
        />
      </g>
      <defs>
        <clipPath id="clip0_578_2364">
          <rect width="30" height="30" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default RouteSVG;
