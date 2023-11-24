"use client";
import React from "react";
import styles from "@/app/fonts.module.scss";

export default function BoldText({ children }) {
  return <p className={styles.boldText}>{children}</p>;
}
