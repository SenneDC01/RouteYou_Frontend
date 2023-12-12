"use client";
import React from "react";
import "@/app/assets/globals.css";
import RouteCard from "@/components/organisms/route-card/RouteCard";
import cardImage from "@/utils/images/CardImage.png";
import bannerImage from "@/utils/images/banner.jpg";
import InfoCard from "@/components/organisms/info-card/InfoCard";
import GroupSVG from "@/utils/icons/GroupSVG";
import CameraSVG from "@/utils/icons/CameraSVG";
import RouteSVG from "@/utils/icons/RouteSVG";
import EventCard from "@/components/organisms/event-card/EventCard";
import Banner from "@/components/organisms/banner/Banner";
import styles from "./page.module.scss";
import BoldText from "@/components/atoms/bold-text/BoldText";

const HomePage = () => {
  const event = {
    id: 1,
    name: "City Light Run Aalst",
    description: "Loop langs de mooiste parels van Aalst",
    start_date: "2024-04-22 21:00:00",
    max_participants: 1000,
    price: "5.00",
    visibility: "PUBLIC",
    image_url: bannerImage,
    author: "Senna Uyttersprot",
    routes: [
      {
        route_data: {
          id: 6833170,
          duration: "1.2km",
          startAddress: "Aalst, Oost-Vlaanderen, Vlaanderen",
          type: "Looproute",
          difficulty: 0.3,
        },
      },
    ],
  };
  return (
    <div className={[styles.pageContainer]}>
      <div className={[styles.bannerContainer]}>
        <Banner />
      </div>
      <div className={[styles.borderContainer]}>
        <InfoCard icon={<RouteSVG />} text="Meer dan 7.270.000 routes" />
        <InfoCard icon={<GroupSVG />} text="Meer dan 15.115.000 gebruikers" />
        <InfoCard
          icon={<CameraSVG />}
          text="Meer dan 3.475.000 trekpleisters"
        />
      </div>
      <div>
        <div className={styles.title}>
          <BoldText>PLAN DE MOOISTE ROUTES</BoldText>
        </div>
        <div className={[styles.borderContainer]}>
          <RouteCard
            image={cardImage}
            title="Groene Gordel Route"
            afstand="220km"
            hoogte="1400m"
            gemStijgingsPercentage="1,6%"
            tijd="4:23:45"
            maxStijgingsPercentage="14,4%"
            moeilijkheid="Medium"
          />
          <RouteCard
            image={cardImage}
            title="Groene Gordel Route"
            afstand="250km"
            hoogte="1800m"
            gemStijgingsPercentage="1,6%"
            tijd="5:23:45"
            maxStijgingsPercentage="14,4%"
            moeilijkheid="Hard"
          />
          <RouteCard
            image={cardImage}
            title="Groene Gordel Route"
            afstand="180km"
            hoogte="1200m"
            gemStijgingsPercentage="1,6%"
            tijd="3:23:45"
            maxStijgingsPercentage="14,4%"
            moeilijkheid="Easy"
          />
          <RouteCard
            image={cardImage}
            title="Groene Gordel Route"
            afstand="180km"
            hoogte="1200m"
            gemStijgingsPercentage="1,6%"
            tijd="3:23:45"
            maxStijgingsPercentage="14,4%"
            moeilijkheid="Easy"
          />
        </div>
      </div>
      <div>
        <div className={styles.title}>
          <BoldText>NEEM DEEL AAN EVENTS</BoldText>
        </div>
        <div className={[styles.bottomCardContainer]}>
          <EventCard event={event} />
          <EventCard event={event} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
