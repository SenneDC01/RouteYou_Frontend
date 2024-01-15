'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './DashboardLink.module.scss';
import Image from 'next/image';

export default function DashboardLink({ children, link, icon }) {
  const pathname = usePathname();

  return (
    <li
      className={`${styles.listItem} ${pathname === link ? styles.active : ''}`}
    >
      <Image
        className={styles.circle}
        src={require('@/utils/icons/activeCircle.svg')}
        alt=""
        width={1}
        height={1}
      ></Image>
      <div>
        <Image
          width={1}
          height={1}
          className={styles.icon}
          src={icon}
          alt={`${children} icon`}
        ></Image>
        <Link className={styles.link} href={link}>
          {children}
        </Link>
        <p>{children}</p>
      </div>
    </li>
  );
}
