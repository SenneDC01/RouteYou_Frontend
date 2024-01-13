'use client';
import React from 'react';
import styles from './DashboardContent.module.scss';
import BigTitle from '@/components/atoms/big-title/BigTitle';

export default function DashboardContent({ title, description, children }) {
  return (
    <section className={styles.content}>
      <BigTitle>{title}</BigTitle>
      <p>{description}</p>
      <div className={styles.list}>{children}</div>
    </section>
  );
}
