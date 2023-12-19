'use client';
import React from 'react';
import styles from '@/app/assets/fonts.module.scss';

export default function SmallText({ children, className }) {
  return <p className={[styles.smallText, className].join(' ')}>{children}</p>;
}
