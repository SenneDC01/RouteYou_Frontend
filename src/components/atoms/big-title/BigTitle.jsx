'use client';
import React from 'react';
import styles from '@/app/assets/fonts.module.scss';

export default function BigTitle({ children }) {
  return <h1 className={styles.bigTitle}>{children}</h1>;
}
