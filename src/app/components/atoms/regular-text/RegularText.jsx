"use client";
import React from "react";
import styles from "@/app/fonts.module.scss";

export default function SubText({ children }) {
  return <p className={styles.regularText}>{children}</p>;
}
