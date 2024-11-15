import React from 'react';
import Image from 'next/image';
import banner from '@/utils/images/banner.jpg';
import RouteSVGWhite from '@/utils/icons/RouteSVGWhite';
import CalenderSVG from '@/utils/icons/CalenderSVG';
import styles from './Banner.module.scss';
import ButtonLink from '@/components/atoms/button-link/ButtonLink';

export default function Banner() {
  return (
    <div className={styles.bannerContainer}>
      <Image src={banner} priority={true} alt="" className={styles.image} />
      <div className={styles.contentContainer}>
        <h1 className={styles.title}>
          Plan the most beautiful routes & events
        </h1>
        <div className={styles.buttonGroup} data-testid="button-group">
          <ButtonLink
            link="https://www.routeyou.com/nl-be/route/search/0/routes-zoeken"
            icon={<RouteSVGWhite />}
            className={styles.button}
          >
            Routes
          </ButtonLink>
          <ButtonLink
            link="/events"
            icon={<CalenderSVG />}
            className={styles.button}
          >
            Events
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
