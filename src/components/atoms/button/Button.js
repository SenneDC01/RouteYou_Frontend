// src/atoms/Button.js
import React from "react";
import styles from "./Button.module.scss";

const Button = ({
  label = "Click me",
  link = "#",
  icon = null,
  buttonStyles,
}) => {
  return (
    <a
      className={[styles.buttonStyle, buttonStyles].join(" ")}
      aria-label="forward button"
      href={link}
    >
      <div className={[styles.buttonSpacing]}>
        {icon && React.cloneElement(icon, { width: "1.5rem", height: "1.5rem" })}
        {label}
      </div>
    </a>
  );
};

export default Button;
