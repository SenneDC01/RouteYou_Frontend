import React from 'react';
import Link from 'next/link';
import styles from './ButtonLink.module.scss';

export default function ButtonLink({
  children,
  icon = null,
  link = '/',
  className,
  ariaLabel,
}) {
  return (
    <Link
      href={link}
      aria-label={ariaLabel}
      className={[styles.buttonStyle, className].join(' ')}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </Link>
  );
}
