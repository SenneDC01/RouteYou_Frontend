'use client';
import BigTitle from '@/components/atoms/big-title/BigTitle';
import EventCard from '@/components/organisms/event-card/EventCard';
import { publicEvents } from '@/services/EventService';
import React, { useEffect, useState } from 'react';
import styles from './EventsPage.module.scss';

export default function EventsPage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await publicEvents();
      setEvents(response.events.data);
    };

    fetchEvents();
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.searchBar}>
        <p>SearchBar</p>
      </div>
      <div className={styles.events}>
        <BigTitle>Events</BigTitle>
        <div className={styles.eventsContainer}>
          {events.map((event, index) => (
            <EventCard event={event} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
