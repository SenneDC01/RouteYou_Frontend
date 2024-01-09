import React from 'react';
import styles from './SecondaryButton.module.scss';

export default function SecondaryButton({
  children,
  onClick,
  type = 'button',
  icon = null,
  className,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={[styles.buttonStyle, className].join(' ')}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </button>
  );
}
