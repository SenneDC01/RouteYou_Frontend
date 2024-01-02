import React from 'react';
import styles from './SignUpBill.module.scss';
import RegularText from '@/components/atoms/regular-text/RegularText';

export default function SignUpBill({ eventPrice, numberOfGroupMembers = 0 }) {
  const price = Number.parseFloat(eventPrice) || 0;
  const total = price * numberOfGroupMembers + price;
  return (
    <div className={styles.bill}>
      <div className={styles.billItem}>
        <div className={styles.billItemText}>
          <RegularText>1X</RegularText>
          <RegularText>Your registration</RegularText>
        </div>
        <RegularText>€{price}</RegularText>
      </div>
      {!!numberOfGroupMembers && (
        <div className={styles.billItem}>
          <div className={styles.billItemText}>
            <RegularText>{numberOfGroupMembers}X</RegularText>
            <RegularText>Group Members</RegularText>
          </div>
          <RegularText>€{price * numberOfGroupMembers}</RegularText>
        </div>
      )}
      <hr className={styles.billLine} />
      <div className={styles.billItem}>
        <RegularText>Total</RegularText>
        <RegularText>€{total}</RegularText>
      </div>
    </div>
  );
}
