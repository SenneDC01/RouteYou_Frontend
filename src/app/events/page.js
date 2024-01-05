'use client';
import BigTitle from '@/components/atoms/big-title/BigTitle';
import EventCard from '@/components/organisms/event-card/EventCard';
import { publicEvents } from '@/services/EventService';
import React, { useEffect, useState } from 'react';
import styles from './EventsPage.module.scss';
import FormField from '@/components/atoms/form-field/FormField';
import Button from '@/components/atoms/button/Button';
import RegularText from '@/components/atoms/regular-text/RegularText';

export default function EventsPage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await publicEvents();
      setEvents(response.events.data);
    };

    fetchEvents();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.page}>
      <div className={styles.searchBar}>
        <form method="get" onSubmit={handleSubmit}>
          <FormField label="Search Term" name="term" type="text" />
          <FormField label="Author" name="author" type="text" />
          <FormField label="Before" name="before" type="date" />
          <FormField label="After" name="after" type="date" />
          <Button type="submit">Search</Button>
        </form>
      </div>
      <div className={styles.events}>
        <BigTitle>Events</BigTitle>
        <div className={styles.eventsContainer}>
          {events.map((event, index) => (
            <EventCard event={event} key={index} />
          ))}
          {events.length === 0 && <RegularText>No events found.</RegularText>}
        </div>
      </div>
    </div>
  );
}
