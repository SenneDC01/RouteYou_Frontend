'use client';
import React from 'react';
import styles from '@/app/assets/fonts.module.scss';

export default function MediumTitle({ children }) {
  return <h2 className={styles.mediumTitle}>{children}</h2>;
}
