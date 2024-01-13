'use client';
import React from 'react';
import styles from './DashboardContent.module.scss';
import MediumTitle from '@/components/atoms/medium-title/MediumTitle';

export default function DashboardContent({ title, description, children }) {
  return (
    <section className={styles.content}>
      <MediumTitle>{title}</MediumTitle>
      <p>{description}</p>
      <div className={styles.list}>{children}</div>
    </section>
  );
}
