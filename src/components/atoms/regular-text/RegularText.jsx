'use client';
import React from 'react';
import styles from '@/app/assets/fonts.module.scss';

export default function RegularText({ children }) {
  return <p className={styles.regularText}>{children}</p>;
}
