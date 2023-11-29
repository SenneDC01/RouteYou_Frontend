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
      {icon && React.cloneElement(icon, { width: "40px", height: "20px" })}
      {label}
    </a>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.element,
  link: PropTypes.string.isRequired,
};

export default Button;
