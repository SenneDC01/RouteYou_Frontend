"use client";
import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import logo from "../utils/images/logo.png";
import * as colors from "../utils/colors";
import CustomDropdown from "@/molecules/Dropdown";

const Header = ({ profileName, profilePicture }) => {
  const headerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1em",
    borderBottom: "1px solid #ddd",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const logoStyle = {
    marginRight: "1em",
    width: 150,
  };

  const itemsStyle = {
    display: "flex",
    alignItems: "center",
    gap: 20,
  };

  const profileStyle = {
    display: "flex",
    alignItems: "center",
  };

  const profilePictureStyle = {
    borderRadius: "50%",
    width: "2.5em",
    height: "2.5em",
    marginRight: "0.625em",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const itemTextStyle = {
    position: "relative",
  };

  const itemBorderStyle = {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: "2px",
    background: colors.green,
  };

  const dropdownItemsEvent = ["Create Event", "Search Event"];
  const dropdownItemsRoutes = ["Go to RouteYou Routes"];

  return (
    <header style={headerStyle}>
      <div style={itemsStyle}>
        <Image src={logo} priority={true} alt="Logo" style={logoStyle} />

        <div style={itemTextStyle}>
          <p>Home</p>
          <div style={itemBorderStyle}></div>
        </div>
        <div style={itemTextStyle}>
          <CustomDropdown
            buttonText={
              <>
                Event
                <span
                  style={{
                    transform: "rotate(90deg) scale(.6, 1.3)",
                    fontSize: 16,
                    fontWeight: "500",
                  }}
                >
                  &gt;
                </span>
              </>
            }
            items={dropdownItemsEvent}
          />
          <div style={itemBorderStyle}></div>
        </div>
        <div style={itemTextStyle}>
          <CustomDropdown
            buttonText={
              <>
                Routes
                <span
                  style={{
                    transform: "rotate(90deg) scale(.6, 1.3)",
                    fontSize: 16,
                    fontWeight: "500",
                  }}
                >
                  &gt;
                </span>
              </>
            }
            items={dropdownItemsRoutes}
          />
          <div style={itemBorderStyle}></div>
        </div>
        <div style={itemTextStyle}>
          <p>Dashboard</p>
          <div style={itemBorderStyle}></div>
        </div>
      </div>

      <div style={profileStyle}>
        <div style={profilePictureStyle}>
          <Image
            src={profilePicture}
            alt="Profile picture"
            width={30}
            height={30}
          />
        </div>
        <p>{profileName}</p>
      </div>
    </header>
  );
};

Header.propTypes = {
  profilePicture: PropTypes.object.isRequired,
  profileName: PropTypes.string.isRequired,
};

export default Header;
