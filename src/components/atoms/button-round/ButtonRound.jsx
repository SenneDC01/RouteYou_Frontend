import React from 'react';
import styles from './ButtonRound.module.scss';
import Link from 'next/link';

export default function ButtonRound({
  href,
  ariaLabel = 'forward-button',
  icon,
  className,
}) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={[styles.buttonStyle, className].join(' ')}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
    </Link>
  );
}
