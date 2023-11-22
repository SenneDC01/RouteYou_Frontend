// pages/index.js or any other component file
"use client";
import React from "react";
import CustomButton from "@/atoms/Button";
import * as colors from "../utils/colors";
import EditSVG from "../utils/icons/EditSVG";
import ArrowLeftSVG from "../utils/icons/ArrowLeftSVG";
import Header from "../organisms/header";
import "../app/globals.css";
import Footer from "@/organisms/footer";
import RouteCard from "@/organisms/RouteCard";
import cardImage from "../utils/images/CardImage.png";
import profilePic from "../utils/images/profilePicture.png";

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
  };

  return (
    <div style={containerStyle}>
      <Header profileName={"John Doe"} profilePicture={profilePic} />
      {/*text scaled nog niet correct*/}
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
      <Footer />
    </div>
  );
};

export default HomePage;
