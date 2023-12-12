"use client";
import React from "react";
import styles from "./DashboardContent.module.scss";

export default function DashboardContent({title, description, children}) {
  console.log(children)
  return <section>
    <h1>
      {title}
    </h1>
    <p>
      {description}
    </p>
    <ol className={styles.list}>
      {children}
    </ol>
  </section>;
}
