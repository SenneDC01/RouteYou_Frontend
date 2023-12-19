import React from 'react';
import Link from 'next/link';
import styles from './ButtonLink.module.scss';

const ButtonLink = ({ children, icon = null, link = '/', className }) => {
  return (
    <Link
      href={link}
      aria-label="forward button"
      className={[styles.buttonStyle, className].join(' ')}
    >
      {icon && React.cloneElement(icon, { width: '40px', height: '20px' })}
      {children}
    </Link>
  );
};

export default ButtonLink;
