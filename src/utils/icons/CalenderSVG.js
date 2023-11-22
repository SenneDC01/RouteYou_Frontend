import React from "react";

const CalenderSVG = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 55 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_50_396)">
        <path
          d="M50.0708 8.84615C50.0708 7.80569 49.6582 6.80784 48.9236 6.07212C48.1891 5.3364 47.1929 4.92308 46.1541 4.92308H38.3208V1H34.4041V4.92308H18.7375V1H14.8208V4.92308H6.98747C5.9487 4.92308 4.95248 5.3364 4.21797 6.07212C3.48345 6.80784 3.0708 7.80569 3.0708 8.84615V48.0769C3.0708 49.1174 3.48345 50.1152 4.21797 50.851C4.95248 51.5867 5.9487 52 6.98747 52H14.8208V48.0769H6.98747V8.84615H14.8208V12.7692H18.7375V8.84615H34.4041V12.7692H38.3208V8.84615H46.1541V20.6154H50.0708V8.84615Z"
          fill="#FFF"
        />
        <path
          d="M36.0708 26L41.1688 35.876L52.0708 37.458L44.0708 45.146L46.0708 56L36.0708 50.876L26.0708 56L28.0708 45.146L20.0708 37.458L31.2708 35.876L36.0708 26Z"
          fill="#FFF"
        />
      </g>
      <defs>
        <clipPath id="clip0_50_396">
          <rect
            width="55"
            height="55"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CalenderSVG;