"use client";
import React from "react";
import Image from "next/image";
import AfstandSVG from "@/utils/icons/AfstandSVG";
import HoogteSVG from "@/utils/icons/HoogteSVG";
import GemStijgingSVG from "@/utils/icons/GemStijgingSVG";
import KlokSVG from "@/utils/icons/KlokSVG";
import MaxStijgingSVG from "@/utils/icons/MaxStijgingSVG";
import MoeilijkheidSVG from "@/utils/icons/MoeilijkheidSVG";
import SVGtext from "@/components/atoms/svg-text/SVGtext";

const RouteCard = ({ route }) => {
  return (
    <a href="#" className="flex justify-center gap-2">
      <div className="shadow-md rounded-2xl">
        <div className="overflow-visible p-0">
          <Image
            height={200}
            width={200}
            alt={route.title}
            className="w-full object-cover rounded-t-2xl"
            src={route.image}
          />
          <p className={"flex justify-center font-semibold pt-2"}>{route.title}</p>
          <div className="flex justify-around flex-row p-4 text-sm gap-4">
            <div className="flex flex-col gap-5">
              <SVGtext label={route.afstand} icon={<AfstandSVG />} />
              <SVGtext label={route.hoogte} icon={<HoogteSVG />} />
              <SVGtext
                label={route.gemStijgingsPercentage}
                icon={<GemStijgingSVG />}
              />
            </div>
            <div className="flex flex-col gap-5">
              <SVGtext label={route.tijd} icon={<KlokSVG />} />
              <SVGtext
                label={route.maxStijgingsPercentage}
                icon={<MaxStijgingSVG />}
              />
              <SVGtext label={route.moeilijkheid} icon={<MoeilijkheidSVG />} />
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default RouteCard;
