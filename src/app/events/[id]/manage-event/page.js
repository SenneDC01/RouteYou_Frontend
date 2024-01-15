'use client';
import React from 'react';
import styles from './ManageEventPage.module.scss';
import Participants from '@/components/organisms/participants/Participants';
import Posts from '@/components/organisms/posts/Posts';
import ManageEventDropDown from '@/components/molecules/manage-event-drop-down/ManageEventDropDown';
import Image from 'next/image';
import BigTitle from '@/components/atoms/big-title/BigTitle';
import SmallText from '@/components/atoms/small-text/SmallText';
import RegularText from '@/components/atoms/regular-text/RegularText';
import SVGtext from '@/components/atoms/svg-text/SVGtext';
import Racefiets from '@/utils/icons/Racefiets';
import AfstandSVG from '@/utils/icons/AfstandSVG';
import KlokSVG from '@/utils/icons/KlokSVG';

export default function ManageEventPage({ event }) {
  return (
    <div className={styles.container}>
      <div className={styles.leftColumn}>
        <Image src={event.image_url} alt="" className={styles.image} />
        <div className={styles.textContainer}>
          <div>
            <BigTitle>{event.name}</BigTitle>
            <SmallText>{event.author}</SmallText>
            <SmallText>{event.start_date}</SmallText>
          </div>
          <RegularText>{event.description}</RegularText>
          <div className={styles.icons}>
            <SVGtext label={event.type} icon={<Racefiets />}></SVGtext>
            <SVGtext
              label={event.distance + 'km'}
              icon={<AfstandSVG />}
            ></SVGtext>
            <SVGtext label={event.time} icon={<KlokSVG />}></SVGtext>
          </div>
        </div>
      </div>
      <div className={styles.rightColumn}>
        <BigTitle>Manage your event</BigTitle>
        <ManageEventDropDown title="Edit"></ManageEventDropDown>
        <ManageEventDropDown
          title="Participants"
          comp={Participants}
        ></ManageEventDropDown>
        <ManageEventDropDown title="Posts" comp={Posts}></ManageEventDropDown>
        <ManageEventDropDown title="Pictures"></ManageEventDropDown>
      </div>
    </div>
  );
}
