// pages/index.js or any other component file
"use client";
import React from "react";
import "@/app/assets/globals.css";
import RouteCard from "@/components/organisms/route-card/RouteCard";
import cardImage from "@/utils/images/CardImage.png";
import InfoCard from "@/components/organisms/info-card/InfoCard";
import GroupSVG from "@/utils/icons/GroupSVG";
import CameraSVG from "@/utils/icons/CameraSVG";
import RouteSVG from "@/utils/icons/RouteSVG";
import EventCard from "@/components/organisms/event-card/EventCard";
import Banner from "@/components/organisms/banner/Banner";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex justify-center p-0 relative">
        <Banner />
      </div>
      <div className="flex justify-center gap-20 p-20 border-b-2 border-light-gray flex-wrap">
        <InfoCard icon={<RouteSVG />} text="Meer dan 7.270.000 routes" />
        <InfoCard icon={<GroupSVG />} text="Meer dan 15.115.000 gebruikers" />
        <InfoCard
          icon={<CameraSVG />}
          text="Meer dan 3.475.000 trekpleisters"
        />
      </div>
      <div className="flex justify-center gap-20 p-20 border-b-2 border-light-gray flex-wrap">
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
      </div>
      <div className="flex justify-center gap-20 p-20 flex-wrap">
        <EventCard
          image={cardImage}
          title="Groene Gordel 2024"
          organisator="Toerisme Vlaanderen"
          dateTime="29 oktober 2023 - 09:00"
          locatie="Sint-Annakring Aalst"
          route="Racefiets route"
          afstand="106 km"
          description="Ontdek naast de prachtige in herfstkleuren gehulde natuur ook ons cultureel erfgoed, in en rond de dreven van Merksplas Kolonie. Wandelen in 3 lussen van 8 km, naar hartenlust onderling combineerbaar tot 16 en 24 km om volop van al het moois te genieten. Tevens voorzien wij een lus van 4 km die geschikt is voor kinderwagens"
        />
        <EventCard
          image={cardImage}
          title="Groene Gordel 2024"
          organisator="Toerisme Vlaanderen"
          dateTime="29 oktober 2023 - 09:00"
          locatie="Sint-Annakring Aalst"
          route="Racefiets route"
          afstand="106 km"
          description="Ontdek naast de prachtige in herfstkleuren gehulde natuur ook ons cultureel erfgoed, in en rond de dreven van Merksplas Kolonie. Wandelen in 3 lussen van 8 km, naar hartenlust onderling combineerbaar tot 16 en 24 km om volop van al het moois te genieten. Tevens voorzien wij een lus van 4 km die geschikt is voor kinderwagens"
        />
      </div>
    </div>
  );
};

export default HomePage;
