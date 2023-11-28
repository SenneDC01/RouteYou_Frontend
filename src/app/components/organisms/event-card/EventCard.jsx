"use client";
import React, { useState } from "react";
import { Card, CardBody, Button } from "@nextui-org/react";
import Image from "next/image";
import PropTypes from "prop-types";
import BoldText from "@/app/components/atoms/bold-text/BoldText";
import SubText from "@/app/components/atoms/sub-text/SubText";
import SVGtext from "@/app/components/atoms/svg-text/SVGtext";
import LocationSVG from "@/utils/icons/LocationSVG";
import CyclistSVG from "@/utils/icons/CyclistSVG";
import StarSVG from "@/utils/icons/StarSVG";
import * as colors from "@/utils/colors";
import CustomButton from "@/app/components/atoms/button/Button";
import ArrowRightSVG from "@/utils/icons/ArrowRightSVG";

const EventCard = ({
  image,
  title = "title",
  organisator = "organisator",
  dateTime = "date - time",
  locatie = "locatie",
  route = "route",
  afstand = "100km",
  description = "description",
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
    console.log("fav");
  };

  return (
    <div className="flex justify-center gap-2 max-w-md">
      {/*Mag geen button in button steken*/}
      <Card shadow="sm">
        <CardBody className="p-0 flex flex-row">
          <div className="flex">
            {/*Image width werkt nie mee*/}
            <Image
              height={100}
              width={100}
              alt={title}
              className="object-cover w-full"
              src={image}
            />

            <div className="flex flex-col gap-2 p-3">
              <div className="flex flex-row justify-between gap-2 p-0">
                <BoldText>Groene Gordel 2024</BoldText>
                <Button
                  isIconOnly
                  className="data-[hover]:bg-foreground/10"
                  radius="full"
                  variant="light"
                  onPress={() => handleToggleFavorite()}
                >
                  <StarSVG
                    width={30}
                    height={30}
                    fill={isFavorite ? colors.green : "none"}
                  />
                </Button>
              </div>
              <div className="flex flex-col gap-2">
                <SubText>
                  {organisator} <br /> {dateTime}
                </SubText>
                <div className="flex flex-col gap-2">
                  <SVGtext label={locatie} icon={<LocationSVG />} />
                  <SVGtext
                    label={`${route} - ${afstand}`}
                    icon={<CyclistSVG />}
                  />
                </div>
                <div className="py-2 flex flex-row">
                  <SubText>
                    {description.length > 130
                      ? description.slice(0, 130) + "..."
                      : description}
                  </SubText>
                  <CustomButton
                    label=""
                    backgroundColor={colors.green}
                    borderColor={colors.green}
                    fontColor={colors.white}
                    icon={<ArrowRightSVG />}
                    width="3em"
                    height="3em"
                    borderRadius={30}
                    link="#"
                  />
                </div>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

EventCard.propTypes = {
  image: PropTypes.object,
  title: PropTypes.string,
  organisator: PropTypes.string,
  dateTime: PropTypes.string,
  locatie: PropTypes.string,
  route: PropTypes.string,
  afstand: PropTypes.string,
  description: PropTypes.string,
};
export default EventCard;
