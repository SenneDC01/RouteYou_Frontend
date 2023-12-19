import React from 'react';
import styles from './InfoCard.module.scss';
import SubText from '@/components/atoms/sub-text/SubText';

const InfoCard = ({ icon = null, text = 'label' }) => {
  return (
    <div className={[styles.infoCard]} data-testid="infocard">
      {icon && (
        <span className={styles.icon} data-testid="icon">
          {icon}
        </span>
      )}
      <SubText>{text}</SubText>
    </div>
  );
};

export default InfoCard;
