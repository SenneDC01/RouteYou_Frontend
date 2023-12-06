// src/atoms/Button.js
import React from "react";
import Link from "next/link";
import styles from "./ButtonLink.module.scss";

const ButtonLink = ({ children, icon = null, link = "/", className }) => {
  return (
    <Link href={link} className={[styles.buttonStyle, className].join(" ")}>
      {icon && React.cloneElement(icon, { width: "1.5rem", height: "1.5rem" })}
      {children}
    </Link>
  );
};

export default ButtonLink;
