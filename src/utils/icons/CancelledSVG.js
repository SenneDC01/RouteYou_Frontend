import React from 'react';

const CancelledSVG = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 17 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="8.5" cy="9.5" r="7.5" stroke="#992A26" strokeWidth="2" />
      <path
        d="M5.49951 12.9998L11.4997 5.49975"
        stroke="#992A26"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M5.5 5.5L11.5 13"
        stroke="#992A26"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default CancelledSVG;
