"use client";
import React from "react";
import styles from "./Header.module.scss";
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
} from "@nextui-org/react";
import Image from "next/image";
import logo from "@/utils/images/logo.png";
import CustomDropdown from "@/components/molecules/drop-down/Dropdown";

const Header = ({ profileName = "John Doe", profilePicture = null }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  React.useEffect(() => {
    // Check login status (e.g., from your authentication context or API)
    // Set isLoggedIn based on the user's authentication status
    // Example: setIsLoggedIn(authService.isAuthenticated());
    // Replace the example with your actual authentication logic
    setIsLoggedIn(true); // Replace with your authentication logic
  }, []);

  const dropdownItemsEvents = ["Create Event", "Search Event"];
  const dropdownItemsRoutes = ["Go to RouteYou Routes"];
  const dropdownItemsProfile = ["Dashboard", "Logout"];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isBordered maxWidth="2xl" as="div">
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />
      <Link href="/">
        <Image
          src={logo}
          priority={true}
          alt="RouteYou"
          height={1000}
          className={styles.logo}
        />
      </Link>
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
          <Link color="foreground" href="/" data-testid="dashboard">
            Dashboard
            <span className={styles.itemBorderStyle}></span>
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden sm:flex gap-3">
          {isLoggedIn ? (
            <>
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
            </>
          ) : (
            <NavbarContent className="hidden sm:flex gap-4">
              <NavbarItem>
                <Link color="foreground" href="/login">
                  Login
                  <span className={styles.itemBorderStyle}></span>
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link color="foreground" href="/register">
                  Register
                  <span className={styles.itemBorderStyle}></span>
                </Link>
              </NavbarItem>
            </NavbarContent>
          )}
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem>
          <Link className="w-full" href="#">
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
          <Link color="foreground" href="/">
            Dashboard
          </Link>
        </NavbarMenuItem>
        {isLoggedIn ? (
          <>
            <NavbarMenuItem className="flex gap-2">
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
            </NavbarMenuItem>
          </>
        ) : (
          <>
            <NavbarMenuItem>
              <Link color="foreground" href="/login">
                Login
              </Link>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <Link color="foreground" href="/register">
                Register
              </Link>
            </NavbarMenuItem>
          </>
        )}
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
