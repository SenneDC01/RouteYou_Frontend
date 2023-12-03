"use client";
import React from "react";
import PropTypes from "prop-types";
import styles from "./InfoCard.module.scss";

const InfoCard = ({ icon = null, text = "label" }) => {
  return (
    <div tabindex="0" className={[styles.infoCard]}>
      {icon && React.cloneElement(icon, { width: "10em", height: "5em" })}
      <p>{text}</p>
    </div>
  );
};

InfoCard.propTypes = {
  icon: PropTypes.element,
  text: PropTypes.string,
};
export default InfoCard;
