'use client';
import React from 'react';
import styles from '@/app/assets/fonts.module.scss';

export default function RegularText({ children, className }) {
  return (
    <p className={[styles.dateTimeField, className].join(' ')}>{children}</p>
  );
}
