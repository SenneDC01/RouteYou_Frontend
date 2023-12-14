import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/utils/images/logo.png";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer
      className={[
        styles.shadow,
        "flex flex-col sm:flex-row items-center p-8 gap-8 w-full",
      ].join(" ")}
    >
      <Image
        src={logo}
        priority={true}
        alt="Logo"
        width={250}
        className={styles.image}
      />

      <div className="flex flex-col md:flex-wrap md:flex-row flex-1 justify-between gap-y-8 gap-x-8">
        <ul className="flex flex-col justify-start gap-2">
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
        <ul className="flex flex-col justify-start gap-2">
          <li>
            <Link
              href="/toegankelijkheidsverklaring"
              className={styles.linkStyles}
            >
              Toegankelijkheidsverklaring
            </Link>
          </li>
          <li>
            <Link href="/privacyverklaring" className={styles.linkStyles}>
              Privacyverklaring
            </Link>
          </li>

          <li>
            <Link href="/evaluatierapport" className={styles.linkStyles}>
              WCAG Report
            </Link>
          </li>
        </ul>

        <div className="flex flex-col">
          <div className="font-semibold">Adres</div>
          <div>Kerkstraat 108</div>
          <div>9050 Gentbrugge, België</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
