'use client';
import React from 'react';
import styles from './Header.module.scss';
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
} from '@nextui-org/react';
import Image from 'next/image';
import logo from '@/utils/images/logo.png';
import CustomDropdown from '@/components/molecules/drop-down/Dropdown';
import { usePathname } from 'next/navigation';

const Header = ({ profileName = 'John Doe', profilePicture = null }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isLoggedIn] = React.useState(false);

  const dropdownItemsEvents = ['Create Event', 'Search Event'];
  const dropdownItemsRoutes = ['Go to RouteYou Routes'];
  const dropdownItemsProfile = ['Dashboard', 'Logout'];

  const pathname = usePathname();
  const isLinkActive = (path) => {
    if (path === '/') {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      isBordered
      maxWidth="2xl"
      as="div"
    >
      <Link href="#main-content" className="skip-link">
        Ga naar hoofdinhoud
      </Link>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
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
        <NavbarItem isActive={isLinkActive('/')}>
          <Link color="foreground" href="/" aria-current="page">
            Home
            <span className={styles.itemBorderStyle}></span>
          </Link>
        </NavbarItem>
        <NavbarItem isActive={isLinkActive('/events')}>
          <CustomDropdown
            buttonText={
              <>
                <span
                  className={isLinkActive('/events') ? styles.boldText : ''}
                >
                  Events
                </span>
                <span className={styles.itemBorderStyle}></span>
                <span className={styles.arrowStyle}>&gt;</span>
              </>
            }
            items={dropdownItemsEvents}
          />
        </NavbarItem>
        <NavbarItem isActive={isLinkActive('/routes')}>
          <CustomDropdown
            buttonText={
              <>
                <span
                  className={isLinkActive('/routes') ? styles.boldText : ''}
                >
                  Routes
                </span>
                <span className={styles.itemBorderStyle}></span>
                <span className={styles.arrowStyle}>&gt;</span>
              </>
            }
            items={dropdownItemsRoutes}
          />
        </NavbarItem>
        <NavbarItem isActive={isLinkActive('/dashboard')}>
          <Link color="foreground" href="/dashboard" data-testid="dashboard">
            Dashboard
            <span className={styles.itemBorderStyle}></span>
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem data-testid="profile" className="hidden sm:flex gap-3">
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
              <NavbarItem isActive={isLinkActive('/login')}>
                <Link color="foreground" href="/login">
                  Login
                  <span className={styles.itemBorderStyle}></span>
                </Link>
              </NavbarItem>
              <NavbarItem isActive={isLinkActive('/register')}>
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
        <NavbarMenuItem isActive={isLinkActive('/')}>
          <Link color="foreground" className="w-full" href="/">
            Home
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <CustomDropdown
            buttonText={
              <>
                <span
                  className={isLinkActive('/events') ? styles.boldText : ''}
                >
                  Events
                </span>
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
                <span
                  className={isLinkActive('/routes') ? styles.boldText : ''}
                >
                  Routes
                </span>
                <span className={styles.arrowStyle}>&gt;</span>
              </>
            }
            items={dropdownItemsRoutes}
          />
        </NavbarMenuItem>
        <NavbarMenuItem isActive={isLinkActive('/dashboard')}>
          <Link color="foreground" href="/dashboard">
            Dashboard
          </Link>
        </NavbarMenuItem>
        {isLoggedIn ? (
          <>
            <NavbarMenuItem data-testid="profile" className="flex gap-2">
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
            <NavbarMenuItem isActive={isLinkActive('/login')}>
              <Link color="foreground" href="/login">
                Login
              </Link>
            </NavbarMenuItem>
            <NavbarMenuItem isActive={isLinkActive('/register')}>
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
