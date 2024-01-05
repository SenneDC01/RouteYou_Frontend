import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/utils/images/logo.png';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={[styles.footer]}>
      <div className={[styles.container]}>
        <Image
          src={logo}
          priority={true}
          alt="Logo"
          width={250}
          className={styles.image}
        />
        <ul className={[styles.list]}>
          <li>
            <Link href="/" className={styles.linkStyles}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/events" className={styles.linkStyles}>
              Search Events
            </Link>
          </li>
          <li>
            <Link href="/events/create" className={styles.linkStyles}>
              Create Event
            </Link>
          </li>
          <li>
            <Link href="/dashboard" className={styles.linkStyles}>
              Dashboard
            </Link>
          </li>
        </ul>

        <ul className={[styles.list]}>
          <li>
            <Link
              href="/toegankelijkheidsverklaring"
              className={styles.linkStyles}
            >
              Accessibility Statement
            </Link>
          </li>
          <li>
            <Link href="/privacy-declaration" className={styles.linkStyles}>
              Privacy declaration
            </Link>
          </li>

          <li>
            <Link href="/evaluatierapport" className={styles.linkStyles}>
              WCAG Report
            </Link>
          </li>
        </ul>

        <div className={[styles.list]}>
          <div className="font-semibold">Address</div>
          <div>Kerkstraat 108</div>
          <div>9050 Gentbrugge, België</div>
        </div>
      </div>
    </footer>
  );
}
