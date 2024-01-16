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
import { useAuth } from '@/services/useAuth';

export default function Header() {
  const { user } = useAuth();

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const dropdownItemsEvents = [
    { title: 'Create Event', link: '/events/create' },
    { title: 'Search Event', link: '/events' },
  ];
  const dropdownItemsRoutes = [
    {
      title: 'Go to RouteYou Routes',
      link: 'https://www.routeyou.com/nl-be/route/search/0/routes-zoeken',
    },
  ];
  const dropdownItemsProfile = [
    { title: 'Dashboard', link: '/dashboard/my-events' },
    { title: 'Logout', link: '/logout' },
  ];

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
      <nav className="flex w-full items-center gap-4">
        <Link href="#main-content" className="skip-link" tabIndex={1}>
          Go to main content
        </Link>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className={['sm:hidden', styles.hamburger].join(' ')}
          tabIndex={2}
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
          {user && (
            <NavbarItem isActive={isLinkActive('/dashboard')}>
              <Link
                color="foreground"
                href="/dashboard/my-events"
                data-testid="dashboard"
              >
                Dashboard
                <span className={styles.itemBorderStyle}></span>
              </Link>
            </NavbarItem>
          )}
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem data-testid="profile" className="hidden sm:flex gap-3">
            {user ? (
              <>
                <Image
                  src={user.image_url}
                  alt="Profile picture"
                  width={30}
                  height={30}
                  className={styles.profilePic}
                />
                <CustomDropdown
                  buttonText={
                    <>
                      {user.full_name}
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
            <Link color="foreground" className="w-full" href="/" tabIndex={3}>
              Home
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <CustomDropdown
              buttonText={
                <>
                  <span
                    tabIndex={4}
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
                    tabIndex={5}
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
          {user ? (
            <>
              <NavbarMenuItem isActive={isLinkActive('/dashboard')}>
                <Link
                  color="foreground"
                  href="/dashboard/my-events"
                  tabIndex={6}
                >
                  Dashboard
                </Link>
              </NavbarMenuItem>
              <NavbarMenuItem data-testid="profile" className="flex gap-2">
                <Image
                  src={user.image_url}
                  alt="Profile picture"
                  width={30}
                  height={30}
                  className={styles.profilePic}
                />
                <CustomDropdown
                  buttonText={
                    <>
                      {user.full_name}
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
                <Link color="foreground" href="/login" tabIndex={7}>
                  Login
                </Link>
              </NavbarMenuItem>
              <NavbarMenuItem isActive={isLinkActive('/register')}>
                <Link color="foreground" href="/register" tabIndex={8}>
                  Register
                </Link>
              </NavbarMenuItem>
            </>
          )}
        </NavbarMenu>
      </nav>
    </Navbar>
  );
}
