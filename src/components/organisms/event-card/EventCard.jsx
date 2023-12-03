// EventCard.jsx

import React, { useState } from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import BoldText from "@/components/atoms/bold-text/BoldText";
import SubText from "@/components/atoms/sub-text/SubText";
import SVGtext from "@/components/atoms/svg-text/SVGtext";
import LocationSVG from "@/utils/icons/LocationSVG";
import CyclistSVG from "@/utils/icons/CyclistSVG";
import StarSVG from "@/utils/icons/StarSVG";
import RoundButton from "@/components/atoms/button-round/ButtonRound";
import ArrowRightSVG from "@/utils/icons/ArrowRightSVG";
import styles from "./EventCard.module.scss";

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
    <div className={[styles.eventCard]}>
      <Image
        height={100}
        width={100}
        alt={title}
        className={[styles.eventImage]}
        src={image}
      />

      <div className={[styles.eventDetails]}>
        <div className={[styles.flexRowContainer]}>
          <BoldText>Groene Gordel 2024</BoldText>
          <button
            className={[styles.iconButton]}
            onClick={() => handleToggleFavorite()}
          >
            <StarSVG
              width={30}
              height={30}
              fill={isFavorite ? "#1a614a" : "none"}
            />
          </button>
        </div>
        <SubText>
          {organisator} <br /> {dateTime}
        </SubText>
        <div className={[styles.flexColContainer]}>
          <SVGtext label={locatie} icon={<LocationSVG />} />
          <SVGtext label={`${route} - ${afstand}`} icon={<CyclistSVG />} />
        </div>
        <div className={[styles.flexRowContainer]}>
          <SubText>
            {description.length > 130
              ? description.slice(0, 130) + "..."
              : description}
          </SubText>
          <div className={[styles.buttonContainer]}>
            <RoundButton icon={<ArrowRightSVG />} link="#" />
          </div>
        </div>
      </div>
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
