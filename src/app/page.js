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
    alt: 'Uitzicht op heuvellandschap met meer',
    link: 'https://www.routeyou.com/nl-be/route/view/9190277/recreatieve-fietsroute/groene-gordelroute-icoonroute',
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
      <section className={[styles.bannerContainer]}>
        <Banner />
      </section>
      <section className={styles.section}>
        <h2>Platform is always growing</h2>
        <div className={[styles.borderContainer]}>
          <InfoCard icon={<RouteSVG />} text="More than 7,270,000 routes" />
          <InfoCard icon={<GroupSVG />} text="More than 15,115,000 users" />
          <InfoCard
            icon={<CameraSVG />}
            text="More than 3,475,000 attractions"
          />
        </div>
      </section>
      <section>
        <div className={styles.title}>
          <h2>Plan the most beautiful routes</h2>
        </div>
        <div className={[styles.routeContrainer]}>
          <RouteCard route={route} />
          <RouteCard route={route} />
          <RouteCard route={route} />
          <RouteCard route={route} />
        </div>
      </section>
      <section>
        <div className={styles.title}>
          <h2>Participate in events</h2>
        </div>
        <div className={[styles.bottomCardContainer]}>
          {events.map((event, index) => (
            <EventCard event={event} key={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
