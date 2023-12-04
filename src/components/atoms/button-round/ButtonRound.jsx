// src/atoms/Button.js
import React from "react";
import PropTypes from "prop-types";
import styles from "./ButtonRound.module.scss";

const ButtonRound = ({ icon = null, buttonStyles, link = "#" }) => {
  return (
    <a
      className={[styles.buttonStyle, buttonStyles].join(" ")}
      aria-label="forward button"
      href={link}
    >
      {icon && React.cloneElement(icon, { width: "40px", height: "20px" })}
    </a>
  );
};

export default ButtonRound;
