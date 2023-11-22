// pages/index.js or any other component file
"use client";
import React from "react";
import CustomButton from "@/atoms/Button";
import * as colors from "../utils/colors";
import EditSVG from "../utils/icons/EditSVG";
import ArrowLeftSVG from "../utils/icons/ArrowLeftSVG";
import "../app/globals.css";
import RouteCard from "@/organisms/RouteCard";
import cardImage from "../utils/images/CardImage.png";
import InfoCard from "@/organisms/InfoCard";
import GroupSVG from "../utils/icons/GroupSVG";
import CameraSVG from "../utils/icons/CameraSVG";
import RouteSVG from "../utils/icons/RouteSVG";
import EventCard from "@/organisms/EventCard";

const HomePage = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  };

  const buttonContainer = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "1vh",
    flex: 1, // Make the content take up the available space
  };

  const cardContainer = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "5vh",
    flex: 1, // Make the content take up the available space
    gap: "2em",
    flexWrap: "wrap",
  };

  return (
    <div style={containerStyle}>
      <div style={cardContainer}>
        <InfoCard
          icon={<RouteSVG />}
          text="Meer dan 7.270.000 routes"
        ></InfoCard>
        <InfoCard
          icon={<GroupSVG />}
          text="Meer dan 15.115.000 gebruikers"
        ></InfoCard>
        <InfoCard
          icon={<CameraSVG />}
          text="Meer dan 3.475.000 trekpleisters"
        ></InfoCard>
      </div>
      <div style={cardContainer}>
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
      <div style={cardContainer}>
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
      <div style={buttonContainer}>
        <CustomButton
          label="Inscrijven"
          backgroundColor={colors.white}
          borderColor={colors.green}
          fontColor={colors.green}
          icon={<EditSVG />}
          width="15em"
          height="3.5em"
          fontStyle="Inter"
          fontWeight="bold"
          fontSize="1em"
        />

        <CustomButton
          label="Cancel"
          backgroundColor={colors.white}
          borderColor={colors.red}
          fontColor={colors.red}
          icon={null}
          width="12em"
          height="3.5em"
          fontStyle="Inter"
          fontWeight="bold"
          fontSize="1em"
        />

        <CustomButton
          label=""
          backgroundColor={colors.green}
          borderColor={colors.green}
          fontColor={colors.white}
          icon={<ArrowLeftSVG />}
          width="3em"
          height="3em"
          borderRadius={30}
        />

        <CustomButton label="Save" />
      </div>
    </div>
  );
};

export default HomePage;
