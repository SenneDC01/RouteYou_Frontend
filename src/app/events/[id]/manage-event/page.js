'use client';
import React from 'react';
import styles from './ManageEventPage.module.scss';
import Participants from '@/components/organisms/participants/Participants';
import Posts from '@/components/organisms/posts/Posts';
import EditEvent from '@/components/organisms/edit-event/EditEvent';
import ManageEventDropDown from '@/components/molecules/manage-event-drop-down/ManageEventDropDown';
import ManageEventDrawer from '@/components/molecules/manage-event-drawer/ManageEventDrawer';
import Image from 'next/image';
import BigTitle from '@/components/atoms/big-title/BigTitle';
import SmallText from '@/components/atoms/small-text/SmallText';
import RegularText from '@/components/atoms/regular-text/RegularText';
import SVGtext from '@/components/atoms/svg-text/SVGtext';
import Racefiets from '@/utils/icons/Racefiets';
import AfstandSVG from '@/utils/icons/AfstandSVG';
import KlokSVG from '@/utils/icons/KlokSVG';
import Pictures from '@/components/organisms/pictures/Pictures';

export default function ManageEventPage({ event }) {
  return (
    <div className={styles.container}>
      <div className={styles.leftColumn}>
        <Image
          src={event.image_url}
          alt=""
          className={styles.image}
          height={500}
          width={500}
        />
        <div className={styles.textContainer}>
          <div>
            <BigTitle>{event.name}</BigTitle>
            <SmallText>{event.author}</SmallText>
            <SmallText>{event.start_date}</SmallText>
          </div>
          <RegularText>{event.description}</RegularText>
          <div className={styles.icons}>
            <SVGtext
              label={event.routes[0].route_data.type}
              icon={<Racefiets />}
            ></SVGtext>
            <SVGtext
              label={event.routes[0].route_data.length}
              icon={<AfstandSVG />}
            ></SVGtext>
            <SVGtext
              label={'Dit is niet aanwezig in de data en moet vervangen worden'}
              icon={<KlokSVG />}
            ></SVGtext>
          </div>
        </div>
      </div>
      <div className={styles.rightColumn}>
        <BigTitle>Manage your event</BigTitle>
        <ManageEventDrawer title="Edit">
          <EditEvent event={event} />
        </ManageEventDrawer>
        <ManageEventDrawer title="Participants">
          <Participants event={event} />
        </ManageEventDrawer>
        <ManageEventDropDown title="Posts" comp={Posts}></ManageEventDropDown>
        <ManageEventDrawer title="Pictures">
          <Pictures event={event} />
        </ManageEventDrawer>
      </div>
    </div>
  );
}
