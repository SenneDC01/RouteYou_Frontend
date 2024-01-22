import React from 'react';
import styles from './StylesEventPaginator.module.scss';

export default function EventPaginator({ links, nextPage, prevPage }) {
  return (
    <div className={styles.paginator}>
      <button
        className={styles.prevButton}
        onClick={prevPage}
        disabled={links.current === 1}
      >
        Previous
      </button>
      <p className={styles.pageNumber}>
        Page {links.current} of {links.last}
      </p>
      <button
        className={styles.nextButton}
        onClick={nextPage}
        disabled={links.current === links.last}
      >
        Next
      </button>
    </div>
  );
}
