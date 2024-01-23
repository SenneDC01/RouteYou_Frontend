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
  const params = new URLSearchParams(searchParams);

  const { replace } = useRouter();
  const pathName = usePathname();

  const [events, setEvents] = useState([]);
  const [page, setPage] = useState({ current: 1, last: 1 });
  const [errors, setErrors] = useState(null);

  const fetchEvents = async (query) => {
    try {
      const response = await publicEvents(query);
      setEvents(response.events.data);
      setPage({
        current: response.events.current_page,
        last: response.events.last_page,
      });

      params.set('page', response.events.current_page);
      replace(`${pathName}?${params.toString()}`);
    } catch (error) {
      setErrors('Failed to load events.');
    }
  };
  /* eslint-disable  */
  useEffect(() => {
    fetchEvents(params.toString());
  }, []);
  const nextPage = () => {
    if (page.current === page.last) return;
    params.set('page', page.current + 1);
    fetchEvents(params.toString());
  };
  const prevPage = () => {
    if (page.current === 1) return;
    params.set('page', page.current - 1);
    fetchEvents(params.toString());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    params.delete('page');
    replace(`${pathName}?${params.toString()}`);
    fetchEvents(params.toString());
  };

  const handleSearchChange = (e) => {
    params.set(e.target.name, e.target.value);
  };

  return (
    <div className={styles.page}>
      <div className={styles.searchBar}>
        <form method="get" onSubmit={handleSubmit}>
          <FormField
            label="Search Term"
            name="term"
            type="text"
            onChange={handleSearchChange}
            value={params.get('term')}
          />
          <FormField
            label="Author"
            name="author"
            type="text"
            onChange={handleSearchChange}
            value={params.get('author')}
          />
          <FormField
            label="Before"
            name="before"
            type="date"
            onChange={handleSearchChange}
            value={params.get('before')}
          />
          <FormField
            label="After"
            name="after"
            type="date"
            onChange={handleSearchChange}
            value={params.get('after')}
          />
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
