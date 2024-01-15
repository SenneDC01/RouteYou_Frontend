'use client';
import React from 'react';
import styles from './ViewMore.module.scss';
import BoldText from '@/components/atoms/bold-text/BoldText';
import TextLink from '@/components/atoms/text-link/TextLink';

export default function ViewMore({ children, link }) {
  return (
    <div className={styles.viewMore}>
      <BoldText>{children}</BoldText>
      {link && (
        <TextLink className={styles.button} href={link} ariaLabel="read more">
          View {children}
        </TextLink>
      )}
    </div>
  );
}
