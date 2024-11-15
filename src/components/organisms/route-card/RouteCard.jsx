'use client';
import React from 'react';
import Image from 'next/image';
import AfstandSVG from '@/utils/icons/AfstandSVG';
import HoogteSVG from '@/utils/icons/HoogteSVG';
import GemStijgingSVG from '@/utils/icons/GemStijgingSVG';
import KlokSVG from '@/utils/icons/KlokSVG';
import MaxStijgingSVG from '@/utils/icons/MaxStijgingSVG';
import MoeilijkheidSVG from '@/utils/icons/MoeilijkheidSVG';
import SVGtext from '@/components/atoms/svg-text/SVGtext';
import styles from './RouteCard.module.scss';

export default function RouteCard({ route }) {
  return (
    <div className={styles.linkContainer}>
      <a href={route.link} className={styles.coverLink}>
        Visit route
      </a>
      <div>
        <Image
          height={200}
          width={200}
          alt={route.alt}
          className={styles.image}
          src={route.image}
        />
        <p className={styles.title}>{route.title}</p>
        <div className={styles.statContainer}>
          <div className={styles.statColumn}>
            <SVGtext label={route.afstand} icon={<AfstandSVG />} />
            <SVGtext label={route.hoogte} icon={<HoogteSVG />} />
            <SVGtext
              label={route.gemStijgingsPercentage}
              icon={<GemStijgingSVG />}
            />
          </div>
          <div className={styles.statColumn}>
            <SVGtext label={route.tijd} icon={<KlokSVG />} />
            <SVGtext
              label={route.maxStijgingsPercentage}
              icon={<MaxStijgingSVG />}
            />
            <SVGtext label={route.moeilijkheid} icon={<MoeilijkheidSVG />} />
          </div>
        </div>
      </div>
    </div>
  );
}
