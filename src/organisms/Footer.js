import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../utils/images/logo.png";
import styles from "@/app/Footer.module.scss";

const Footer = () => {
  return (
    <footer
      className="flex flex-col sm:flex-row items-center p-8 gap-8"
      style={{
        boxShadow: "0px -4px 8px rgba(0, 0, 0, 0.1)",
        // marginTop: "-8px", // anders is de shadow niet goed
      }}
    >
      <Image src={logo} priority={true} alt="Logo" width={250} />

      <div className="flex flex-col md:flex-wrap md:flex-row flex-1 justify-between gap-y-8 gap-x-8">
        {/* Column 1 */}
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
        {/* Column 2 */}
        <ul className="flex flex-col justify-start gap-2">
          <li>
            <Link
              href="/toegankelijkheisverklaring"
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

        {/* Column 4 */}
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
