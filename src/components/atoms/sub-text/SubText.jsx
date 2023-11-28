"use client";
import React from "react";
import styles from "@/app/assets/fonts.module.scss";

export default function SubText({ children }) {
  return <p className={styles.subText}>{children}</p>;
}
