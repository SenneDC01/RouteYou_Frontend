import React from 'react';
import Image from 'next/image';
import BoldText from '@/components/atoms/bold-text/BoldText';
import SubText from '@/components/atoms/sub-text/SubText';
import MedalSVG from '@/utils/icons/MedalSVG';
import styles from './BadgeCard.module.scss';

export default function BadgeCard({
  image,
  title = 'Groene Gordel 2024',
  organisator = 'organisator',
  dateTime = 'date - time',
}) {
  return (
    <div data-testid="badgeCard" className={[styles.badgeCard]}>
      <Image
        height={300}
        width={300}
        alt={title}
        className={[styles.badgeImage]}
        src={image}
      />
      <div className={[styles.badgeRowContainer]}>
        <div className={[styles.badgeDetails]}>
          <BoldText>{title}</BoldText>
          <SubText>
            {organisator} <br /> {dateTime}
          </SubText>
        </div>
        <MedalSVG width={60} height={60} />
      </div>
    </div>
  );
}
