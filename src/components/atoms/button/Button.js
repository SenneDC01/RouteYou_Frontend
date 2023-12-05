// src/atoms/Button.js
import React from "react";
import styles from "./Button.module.scss";

const Button = ({
  children,
  onClick,
  type = "button",
  icon = null,
  buttonStyles,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={[styles.buttonStyle, buttonStyles].join(" ")}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
