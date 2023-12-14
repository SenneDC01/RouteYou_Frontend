import React from "react";
import Image from "next/image";
import BoldText from "@/components/atoms/bold-text/BoldText";
import SubText from "@/components/atoms/sub-text/SubText";
import SVGtext from "@/components/atoms/svg-text/SVGtext";
import LocationSVG from "@/utils/icons/LocationSVG";
import CyclistSVG from "@/utils/icons/CyclistSVG";
import RoundButton from "@/components/atoms/button-round/ButtonRound";
import ArrowRightSVG from "@/utils/icons/ArrowRightSVG";
import styles from "./EventCard.module.scss";
import FavButton from "@/components/atoms/fav-button/FavButton";

const EventCard = ({ event }) => {
  return (
    <div className={[styles.eventCard]}>
      <Image
        height={100}
        width={100}
        alt={event.name}
        className={[styles.eventImage]}
        src={event.image_url}
      />

      <div className={[styles.eventDetails]}>
        <div className={[styles.flexRowContainer]}>
          <BoldText>{event.name}</BoldText>
          <FavButton />
        </div>
        <SubText>
          {event.author} <br /> {event.start_date}
        </SubText>
        <div className={[styles.flexColContainer]}>
          <SVGtext
            label={event.routes?.[0].route_data.startAddress}
            icon={<LocationSVG />}
          />
          <SVGtext
            label={`${event.routes?.[0].route_data.type} - ${event.routes?.[0].route_data.duration}`}
            icon={<CyclistSVG />}
          />
        </div>
        <div className={[styles.flexRowContainer]}>
          <SubText>
            {event.description.length > 130
              ? event.description.slice(0, 130) + "..."
              : event.description}
          </SubText>
          <div className={[styles.buttonContainer]}>
            <RoundButton
              icon={<ArrowRightSVG />}
              href={`/events/${event.id}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
