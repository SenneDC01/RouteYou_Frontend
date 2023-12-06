"use client";
import React from "react";
import styles from "./Header.module.scss";
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
import CustomDropdown from "@/components/molecules/drop-down/Dropdown";

const Header = ({ profileName = "John Doe", profilePicture = null }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const dropdownItemsEvents = ["Create Event", "Search Event"];
  const dropdownItemsRoutes = ["Go to RouteYou Routes"];
  const dropdownItemsProfile = ["Dashboard", "Logout"];

  //header mag niet in nav?
  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isBordered maxWidth="2xl" as="div">
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />
      <NavbarBrand className="flex min-w-fit justify-center flex-grow-0 pe-2">
        <Link href="/">
          <Image
            src={logo}
            priority={true}
            alt="RouteYou"
            className={styles.logo}
          />
        </Link>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4">
        <NavbarItem isActive>
          <Link href="/" aria-current="page">
            Home
            <span className={styles.itemBorderStyle}></span>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <CustomDropdown
            buttonText={
              <>
                Events
                <span className={styles.itemBorderStyle}></span>
                <span className={styles.arrowStyle}>&gt;</span>
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
                <span className={styles.itemBorderStyle}></span>
                <span className={styles.arrowStyle}>&gt;</span>
              </>
            }
            items={dropdownItemsRoutes}
          />
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/">
            Dashboard
            <span className={styles.itemBorderStyle}></span>
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="flex gap-3">
          <Image
            src={profilePicture}
            alt="Profile picture"
            width={30}
            className={styles.profilePic}
          />
          <CustomDropdown
            buttonText={
              <>
                {profileName}
                <span className={styles.arrowStyle}>&gt;</span>
              </>
            }
            items={dropdownItemsProfile}
          />
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
                <span className={styles.arrowStyle}>&gt;</span>
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
                <span className={styles.arrowStyle}>&gt;</span>
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
