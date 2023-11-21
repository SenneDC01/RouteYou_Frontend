"use client";
import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
import PropTypes from "prop-types";
import AfstandSVG from "@/utils/icons/AfstandSVG";
import HoogteSVG from "@/utils/icons/HoogteSVG";
import GemStijgingSVG from "@/utils/icons/GemStijgingSVG";
import KlokSVG from "@/utils/icons/KlokSVG";
import MaxStijgingSVG from "@/utils/icons/MaxStijgingSVG";
import MoeilijkheidSVG from "@/utils/icons/MoeilijkheidSVG";

const RouteCard = ({
  image,
  title = "label",
  afstand = "200km",
  hoogte = "1500m",
  gemStijgingsPercentage = "1,6%",
  tijd = "5:23:45",
  maxStijgingsPercentage = "14,4%",
  moeilijkheid = "Hard",
}) => {
  return (
    <div className="flex justify-center gap-2">
      <Card
        shadow="sm"
        isPressable
        onPress={() => console.log("item pressed")}
        className="hover:shadow-xl transition-shadow duration-300 ease-in-out"
      >
        <CardBody className="overflow-visible p-0">
          <Image
            shadow="sm"
            radius="lg"
            height={200}
            width={200}
            alt={title}
            className="w-full object-cover"
            src={image}
          />
          <p className={"flex justify-center font-semibold pt-2"}>{title}</p>
          <div className="flex justify-center flex-row gap-5 py-4 text-sm">
            <div className="flex flex-col gap-5">
              <p className="flex flex-row gap-1 items-center">
                {<AfstandSVG width={25} height={25} />}
                {afstand}
              </p>
              <p className="flex flex-row gap-1 items-center">
                {<HoogteSVG width={25} height={25} />}
                {hoogte}
              </p>
              <p className="flex flex-row gap-1 items-center">
                {<GemStijgingSVG width={25} height={25} />}
                {gemStijgingsPercentage}
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <p className="flex flex-row gap-1 items-center">
                {<KlokSVG width={25} height={25} />}
                {tijd}
              </p>
              <p className="flex flex-row gap-1 items-center">
                {<MaxStijgingSVG width={25} height={25} />}
                {maxStijgingsPercentage}
              </p>
              <p className="flex flex-row gap-1 items-center">
                {<MoeilijkheidSVG width={25} height={25} />}
                {moeilijkheid}
              </p>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

RouteCard.propTypes = {
  image: PropTypes.object,
  title: PropTypes.string,
  afstand: PropTypes.string,
  hoogte: PropTypes.string,
  gemStijgingsPercentage: PropTypes.string,
  tijd: PropTypes.string,
  maxStijgingsPercentage: PropTypes.string,
  moeilijkheid: PropTypes.string,
};
export default RouteCard;
