import React from "react";
import Image from "next/image";
import banner from "../utils/images/banner.jpg";
import Button from "../atoms/Button";
import RouteSVGWhite from "@/utils/icons/RouteSVGWhite";
import CalenderSVG from "@/utils/icons/CalenderSVG";

const Banner = () => {
  return (
    <div className="flex items-center justify-center w-full max-w-screen max-h-unit-8xl overflow-hidden bg-center relative">
      <Image
        src={banner}
        priority={true}
        alt="banner image"
        className="brightness-50"
      />
      <div className="flex flex-col items-center justify-center absolute inset-0 p-5 gap-5">
        <p className="text-white text-4xl font-semibold mb-6 uppercase">
          Plan de mooiste <br /> routes & events
        </p>
        <div className="flex gap-20 justify-center flex-wrap">
          <Button
            label="Routes"
            width="14em"
            height="3em"
            icon={<RouteSVGWhite />}
            fontSize="0.9em"
          />
          <Button
            label="Events"
            width="14em"
            height="3em"
            icon={<CalenderSVG />}
            fontSize="0.9em"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
