// src/atoms/Button.js
import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.scss";

const Button = ({
  label = "Click me",
  icon = null,
  buttonStyles,
  link = "#",
}) => {
  return (
    <a
      className={[styles.buttonStyle, buttonStyles].join(" ")}
      aria-label="forward button"
      href={link}
    >
      <div className={[styles.buttonSpacing]}>
        {icon && React.cloneElement(icon, { width: "3rem", height: "1.5rem" })}
        {label}
      </div>
    </a>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.element,
  link: PropTypes.string.isRequired,
};

export default Button;
