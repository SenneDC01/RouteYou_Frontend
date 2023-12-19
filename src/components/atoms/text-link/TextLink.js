import Link from 'next/link';
import React from 'react';
import styles from './TextLink.module.scss';

const TextLink = ({ children, href }) => {
  return (
    <Link href={href} passHref legacyBehavior>
      <a className={styles.link}>{children}</a>
    </Link>
  );
};

export default TextLink;
