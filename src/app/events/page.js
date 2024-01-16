'use client';
import BigTitle from '@/components/atoms/big-title/BigTitle';
import EventCard from '@/components/organisms/event-card/EventCard';
import { publicEvents } from '@/services/EventService';
import React, { useEffect, useState } from 'react';
import styles from './EventsPage.module.scss';
import FormField from '@/components/atoms/form-field/FormField';
import Button from '@/components/atoms/button/Button';
import RegularText from '@/components/atoms/regular-text/RegularText';
import EventPaginator from '@/components/organisms/event-paginator/EventPaginator';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

export default function EventsPage() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathName = usePathname();

  const [events, setEvents] = useState([]);
  const [page, setPage] = useState({ current: 1, last: 1 });
  const [errors, setErrors] = useState(null);

  const fetchEvents = async (page) => {
    try {
      const response = await publicEvents(page.current);
      setEvents(response.events.data);
      setPage({
        current: response.events.current_page,
        last: response.events.last_page,
      });

      const params = new URLSearchParams(searchParams);
      params.set('page', page.current);
      replace(`${pathName}?${params.toString()}`);
    } catch (error) {
      setErrors('Failed to load events.');
    }
  };

  useEffect(() => {
    page.current = parseInt(searchParams.get('page')) || 1;
    fetchEvents(page);
  }, []);

  const nextPage = () => {
    if (page.current === page.last) return;
    setPage({ current: page.current + 1, last: page.last });
    fetchEvents({ current: page.current + 1, last: page.last });
  };
  const prevPage = () => {
    if (page.current === 1) return;
    setPage({ current: page.current - 1, last: page.last });
    fetchEvents({ current: page.current - 1, last: page.last });
  };

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
        <div>
          <BigTitle>Events</BigTitle>
          <div className={styles.eventsContainer}>
            {events.map((event, index) => (
              <EventCard event={event} key={index} />
            ))}
            {events.length === 0 && (
              <RegularText>{errors || 'No events found.'}</RegularText>
            )}
          </div>
        </div>
        <EventPaginator links={page} nextPage={nextPage} prevPage={prevPage} />
      </div>
    </div>
  );
}
