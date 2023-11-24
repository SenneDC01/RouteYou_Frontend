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
} from "@nextui-org/react";
import PropTypes from "prop-types";
import Image from "next/image";
import logo from "@/utils/images/logo.png";
import CustomDropdown from "@/app/components/molecules/drop-down/Dropdown";
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

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isBordered maxWidth="xl">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand className="flex">
          <Link href="/">
            <Image src={logo} priority={true} alt="RouteYou" />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link href="/" aria-current="page">
            Home
            <div style={itemBorderStyle}></div>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <CustomDropdown
            buttonText={
              <>
                Events
                <div style={itemBorderStyle}></div>
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
            items={dropdownItemsEvents}
          />
        </NavbarItem>
        <NavbarItem isActive>
          <CustomDropdown
            buttonText={
              <>
                Routes
                <div style={itemBorderStyle}></div>
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
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/">
            Dashboard
            <div style={itemBorderStyle}></div>
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
            items={dropdownItemsEvents}
          />
        </NavbarMenuItem>
        <NavbarMenuItem>
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
