import React from 'react';
import Image from 'next/image';
import BoldText from '@/components/atoms/bold-text/BoldText';
import SubText from '@/components/atoms/sub-text/SubText';
import MedalSVG from '@/utils/icons/MedalSVG';
import styles from './BadgeCard.module.scss';

export default function BadgeCard({ event }) {
  return (
    <div data-testid="badgeCard" className={[styles.badgeCard]}>
      <Image
        height={300}
        width={300}
        alt=""
        className={[styles.badgeImage]}
        src={event.image_url}
      />
      <div className={[styles.badgeRowContainer]}>
        <div className={[styles.badgeDetails]}>
          <BoldText>{event.name}</BoldText>
          <SubText>
            {event.author} <br /> {event.start_date}
          </SubText>
        </div>
        <MedalSVG width={60} height={60} />
      </div>
    </div>
  );
}
