import React, { useState } from 'react';
import styles from './ManageEventDrawer.module.scss';
import ArrowDownSVG from '@/utils/icons/ArrowDownSVG';
import ArrowUpSVG from '@/utils/icons/ArrowUpSVG';

export default function ManageEventDrawer({ children, title = 'title' }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleButtonClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={handleButtonClick}>
        {title}
        {isDropdownOpen ? (
          <ArrowUpSVG width={15} height={15} />
        ) : (
          <ArrowDownSVG width={15} height={15} />
        )}
      </button>

      {isDropdownOpen && <div className={styles.dropdown}>{children}</div>}
    </div>
  );
}
