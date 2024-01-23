'use client';
import React, { useState } from 'react';
import styles from './ManageEventPage.module.scss';
import Participants from '@/components/organisms/participants/Participants';
import Posts from '@/components/organisms/posts/Posts';
import EditEvent from '@/components/organisms/edit-event/EditEvent';
import ManageEventDrawer from '@/components/molecules/manage-event-drawer/ManageEventDrawer';
import Image from 'next/image';
import BigTitle from '@/components/atoms/big-title/BigTitle';
import SmallText from '@/components/atoms/small-text/SmallText';
import RegularText from '@/components/atoms/regular-text/RegularText';
import SVGtext from '@/components/atoms/svg-text/SVGtext';
import Racefiets from '@/utils/icons/Racefiets';
import AfstandSVG from '@/utils/icons/AfstandSVG';
import Pictures from '@/components/organisms/pictures/Pictures';
import MaxStijgingSVG from '@/utils/icons/MaxStijgingSVG';
import { eventDetailClient } from '@/services/EventService';

export default function ManageEventPage({ event }) {
  const [eventState, setEventState] = useState(event);

  const refreshEvent = async () => {
    const response = await eventDetailClient(event.id);
    if (response.code === 200) {
      setEventState(response.event);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftColumn}>
        <Image
          src={eventState.image_url}
          alt=""
          className={styles.image}
          height={500}
          width={500}
        />
        <div className={styles.textContainer}>
          <div>
            <BigTitle>{eventState.name}</BigTitle>
            <SmallText>{eventState.author}</SmallText>
            <SmallText>{eventState.start_date}</SmallText>
          </div>
          <RegularText>{eventState.description}</RegularText>
          <div className={styles.icons}>
            <SVGtext
              label={eventState.routes[0].route_data.type}
              icon={<Racefiets />}
            ></SVGtext>
            <SVGtext
              label={eventState.routes[0].route_data.length}
              icon={<AfstandSVG />}
            ></SVGtext>
            <SVGtext
              label={eventState.routes[0].route_data.maximum_ascent}
              icon={<MaxStijgingSVG />}
            ></SVGtext>
          </div>
        </div>
      </div>
      <div className={styles.rightColumn}>
        <BigTitle>Manage your event</BigTitle>
        <ManageEventDrawer title="Edit">
          <EditEvent updateEvent={refreshEvent} event={eventState} />
        </ManageEventDrawer>
        <ManageEventDrawer title="Participants">
          <Participants event={event} />
        </ManageEventDrawer>
        <ManageEventDrawer title="Posts">
          <Posts event={event} />
        </ManageEventDrawer>
        <ManageEventDrawer title="Pictures">
          <Pictures event={event} />
        </ManageEventDrawer>
      </div>
    </div>
  );
}
