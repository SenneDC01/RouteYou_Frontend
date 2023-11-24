// src/atoms/Button.js
import React from "react";
import Link from "next/link";
import * as colors from "@/utils/colors";
import styles from "./ButtonLink.module.scss";

const ButtonLink = ({
  children,
  backgroundColor = colors.green,
  borderColor = null,
  fontColor = colors.white,
  icon = null,
  link = "/",
  width = "",
}) => {
  const buttonStyle = {
    backgroundColor: backgroundColor,
    borderColor: borderColor,
    borderWidth: 3,
    color: fontColor,
    width: width,
  };

  return (
    <Link href={link} style={buttonStyle} className={styles.buttonStyle}>
      {icon && React.cloneElement(icon, { width: "40px", height: "20px" })}
      {children}
    </Link>
  );
};

export default ButtonLink;
