"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./DashboardLink.module.scss";
import Image from "next/image";

export default function DashboardLink({ children, link, icon }) {
  const pathname = usePathname();

  return (
    <li
      className={`${styles.listItem} ${pathname === link ? styles.active : ""}`}
    >
      <Image
        className={styles.circle}
        src={require("@/utils/icons/activeCircle.svg")}
        role="img"
        alt="star"
      ></Image>
      <Image className={styles.icon} src={icon} role="img" alt="star"></Image>
      <Link className={styles.link} href={link}>
        {children}
      </Link>
    </li>
  );
}
