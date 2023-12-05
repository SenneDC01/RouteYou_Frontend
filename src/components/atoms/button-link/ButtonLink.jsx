import React from "react";
import Link from "next/link";
import styles from "./ButtonLink.module.scss";

const ButtonLink = ({ children, href = "/", icon = null, className }) => {
  return (
    <Link href={href} className={[styles.buttonStyle, className].join(" ")}>
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </Link>
  );
};

export default ButtonLink;