import React from 'react';
import styles from './SVGtext.module.scss';

const SVGtext = ({ label, icon }) => {
  return (
    <p className="flex flex-row gap-2 items-center">
      {icon && <span className={styles.icon}>{icon}</span>}
      {label}
    </p>
  );
};

export default SVGtext;
