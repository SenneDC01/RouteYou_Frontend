import React from "react";
import styles from "./InfoCard.module.scss";

const InfoCard = ({ icon = null, text = "label" }) => {
  return (
    <div className={[styles.infoCard]} data-testid="infocard">
      {icon && (
        <span className={styles.icon} data-testid="icon">
          {icon}
        </span>
      )}
      <p>{text}</p>
    </div>
  );
};

export default InfoCard;