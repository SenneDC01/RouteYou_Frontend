import React from 'react';
import styles from './LoadingSpinner.module.scss';
import RegularText from '@/components/atoms/regular-text/RegularText';

export default function LoadingSpinner({ isLoading, message }) {
  return (
    <>
      {isLoading && (
        <div className={styles.loader}>
          <div className={styles.spinner}></div>
          <RegularText>{message}</RegularText>
        </div>
      )}
    </>
  );
}
