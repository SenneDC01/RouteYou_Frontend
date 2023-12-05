"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./DashboardLink.module.scss";

export default function DashboardLink({ children, link }) {
  const pathname = usePathname();

  return (
    <Link
      className={`link ${pathname === link ? styles.active : ""}`}
      href={link}
    >
      {children}
    </Link>
  );
}
