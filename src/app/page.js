'use client';
import React, { useEffect, useState } from 'react';
import '@/app/assets/globals.css';
import RouteCard from '@/components/organisms/route-card/RouteCard';
import cardImage from '@/utils/images/CardImage.png';
import InfoCard from '@/components/organisms/info-card/InfoCard';
import GroupSVG from '@/utils/icons/GroupSVG';
import CameraSVG from '@/utils/icons/CameraSVG';
import RouteSVG from '@/utils/icons/RouteSVG';
import EventCard from '@/components/organisms/event-card/EventCard';
import Banner from '@/components/organisms/banner/Banner';
import styles from './HomePage.module.scss';
import BoldText from '@/components/atoms/bold-text/BoldText';
import Participants from '@/components/organisms/participants/Participants';
import ManageEventDropDown from '@/components/molecules/manage-event-drop-down/ManageEventDropDown';
import { publicEvents } from '@/services/EventService';

const HomePage = () => {
  const route = {
    title: 'Groene Gordel Route',
    afstand: '220km',
    hoogte: '1400m',
    gemStijgingsPercentage: '1,6%',
    maxStijgingsPercentage: '14,4%',
    tijd: '4:23:45',
    moeilijkheid: 'Medium',
    image: cardImage,
  };

  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await publicEvents();
      setEvents(response.events.data.slice(0, 2));
    };

    fetchEvents();
  }, []);

  return (
    <div className={[styles.pageContainer]}>
      <div className={[styles.bannerContainer]}>
        <Banner />
      </div>
      <div className={[styles.borderContainer]}>
        <InfoCard icon={<RouteSVG />} text="More than 7,270,000 routes" />
        <InfoCard icon={<GroupSVG />} text="More than 15,115,000 users" />
        <InfoCard icon={<CameraSVG />} text="More than 3,475,000 attractions" />
      </div>
      <div>
        <div className={styles.title}>
          <BoldText>PLAN THE MOST BEAUTIFUL ROUTES</BoldText>
        </div>
        <div className={[styles.borderContainer]}>
          <RouteCard route={route} />
          <RouteCard route={route} />
          <RouteCard route={route} />
          <RouteCard route={route} />
        </div>
      </div>
      <div>
        <div className={styles.title}>
          <BoldText>PARTICIPATE IN EVENTS</BoldText>
        </div>
        <div className={[styles.bottomCardContainer]}>
          {events.map((event, index) => (
            <EventCard event={event} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
