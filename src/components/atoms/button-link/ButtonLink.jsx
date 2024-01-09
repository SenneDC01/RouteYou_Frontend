import React from 'react';
import Link from 'next/link';
import styles from './ButtonLink.module.scss';

export default function ButtonLink({
  children,
  icon = null,
  link = '/',
  className,
}) {
  return (
    <Link
      href={link}
      aria-label="forward button"
      className={[styles.buttonStyle, className].join(' ')}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </Link>
  );
}
