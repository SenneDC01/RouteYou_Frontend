import React from 'react';

const SignedUpSVG = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 9.5C17 13.5891 13.4729 17 9 17C4.5271 17 1 13.5891 1 9.5C1 5.41095 4.5271 2 9 2C13.4729 2 17 5.41095 17 9.5Z"
        stroke="#1A614A"
        strokeWidth="2"
      />
      <path
        d="M5 10.5L8 13L12.5 6"
        stroke="#1A614A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SignedUpSVG;
