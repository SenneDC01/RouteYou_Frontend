"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  Button,
} from "@nextui-org/react";
import PropTypes from "prop-types";
import Image from "next/image";
import logo from "@/utils/images/logo.png";
import CustomDropdown from "@/components/molecules/drop-down/Dropdown";
import * as colors from "@/utils/colors";

const Header = ({ profileName = "John Doe", profilePicture = null }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const dropdownItemsEvents = ["Create Event", "Search Event"];
  const dropdownItemsRoutes = ["Go to RouteYou Routes"];

  const itemBorderStyle = {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: "2px",
    background: colors.green,
  };

  const arrowStyle = {
    transform: "rotate(90deg) scale(.6, 1.3)",
    fontSize: "1.2em",
    fontWeight: "500",
  };

  //header mag niet in nav?
  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isBordered maxWidth="2xl" as="div">
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />
      <NavbarBrand className="flex min-w-fit justify-center flex-grow-0 pe-2">
        <Link href="/">
          <Image src={logo} priority={true} alt="RouteYou" />
        </Link>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4">
        <NavbarItem isActive>
          <Link href="/" aria-current="page">
            Home
            <span style={itemBorderStyle}></span>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <CustomDropdown
            buttonText={
              <>
                Events
                <span style={itemBorderStyle}></span>
                <span style={arrowStyle}>&gt;</span>
              </>
            }
            items={dropdownItemsEvents}
          />
        </NavbarItem>
        <NavbarItem isActive>
          <CustomDropdown
            buttonText={
              <>
                Routes
                <span style={itemBorderStyle}></span>
                <span style={arrowStyle}>&gt;</span>
              </>
            }
            items={dropdownItemsRoutes}
          />
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/">
            Dashboard
            <span style={itemBorderStyle}></span>
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="flex gap-3">
          <Image
            src={profilePicture}
            alt="Profile picture"
            width={30}
            height={30}
          />
          <p>{profileName}</p>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem>
          <Link className="w-full" href="#" size="lg">
            Home
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <CustomDropdown
            buttonText={
              <>
                Events
                <span style={arrowStyle}>&gt;</span>
              </>
            }
            items={dropdownItemsEvents}
          />
          <Link className="w-full" href="#" size="lg" color="foreground">
            Create event
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="w-full" href="#" size="lg" color="foreground">
            Search event
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <CustomDropdown
            buttonText={
              <>
                Routes
                <span style={arrowStyle}>&gt;</span>
              </>
            }
            items={dropdownItemsRoutes}
          />
          <Link className="w-full" href="#" size="lg" color="foreground">
            Go to RouteYou Routes
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="w-full" href="#" size="lg" color="foreground">
            Dashboard
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

Header.propTypes = {
  profilePicture: PropTypes.object.isRequired,
  profileName: PropTypes.string.isRequired,
};
export default Header;
