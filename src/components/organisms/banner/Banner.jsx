import React from "react";
import Image from "next/image";
import banner from "@/utils/images/banner.jpg";
import RouteSVGWhite from "@/utils/icons/RouteSVGWhite";
import CalenderSVG from "@/utils/icons/CalenderSVG";
import styles from "./Banner.module.scss";
import ButtonLink from "@/components/atoms/button-link/ButtonLink";

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
        <h1 className="text-white text-4xl font-semibold mb-6 uppercase">
          Plan de mooiste <br /> routes & events
        </h1>
        <div className="flex w-full max-w-3xl justify-around flex-wrap gap-2">
          <ButtonLink
            href="#"
            icon={<RouteSVGWhite />}
            className={styles.button}
          >
            Routes
          </ButtonLink>
          <ButtonLink href="#" icon={<CalenderSVG />} className={styles.button}>
            Events
          </ButtonLink>
        </div>
      </div>
    </div>
  );
};

export default Banner;
