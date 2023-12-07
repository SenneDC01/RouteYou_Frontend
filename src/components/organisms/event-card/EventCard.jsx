"use client";
import React, { useState } from "react";
import { Card, CardBody, Button } from "@nextui-org/react";
import Image from "next/image";
import PropTypes from "prop-types";
import BoldText from "@/components/atoms/bold-text/BoldText";
import SubText from "@/components/atoms/sub-text/SubText";
import SVGtext from "@/components/atoms/svg-text/SVGtext";
import LocationSVG from "@/utils/icons/LocationSVG";
import CyclistSVG from "@/utils/icons/CyclistSVG";
import StarSVG from "@/utils/icons/StarSVG";

import RoundButton from "@/components/atoms/button-round/ButtonRound";
import ArrowRightSVG from "@/utils/icons/ArrowRightSVG";

const EventCard = ({
  event,
  // image,
  // title = "title",
  // organisator = "organisator",
  // dateTime = "date - time",
  // locatie = "locatie",
  // route = "route",
  // afstand = "100km",
  // description = "description",
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
              alt={event.title}
              className="object-cover w-full"
              src={event.image}
            />

            <div className="flex flex-col gap-2 p-3">
              <div className="flex flex-row justify-between gap-2 p-0">
                <BoldText>{event.title}</BoldText>
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
                    fill={isFavorite ? "#1a614a" : "none"}
                  />
                </Button>
              </div>
              <div className="flex flex-col gap-2">
                <SubText>
                  {event.organisator} <br /> {event.dateTime}
                </SubText>
                <div className="flex flex-col gap-2">
                  <SVGtext label={event.locatie} icon={<LocationSVG />} />
                  <SVGtext
                    label={`${event.route} - ${event.afstand}`}
                    icon={<CyclistSVG />}
                  />
                </div>
                <div className="py-2 flex flex-row">
                  <SubText>
                    {event.description.length > 130
                      ? event.description.slice(0, 130) + "..."
                      : event.description}
                  </SubText>
                  <div className="flex flex-col h-full justify-end px-2">
                    <RoundButton icon={<ArrowRightSVG />} link="#" />
                  </div>
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
