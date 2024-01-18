'use client';
import React, { useEffect, useState } from 'react';
import DashboardNav from '@/components/organisms/dashboard-nav/DashboardNav';
import DashboardContent from '@/components/organisms/dashboard-content/DashboardContent';
import EventCard from '@/components/organisms/event-card/EventCard';
import styles from '../DashboardPage.module.scss';
import '../DashboardStyling.css';
import TextLink from '@/components/atoms/text-link/TextLink';
import EventPaginator from '@/components/organisms/event-paginator/EventPaginator';
import { createdEvents } from '@/services/EventService';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function Page() {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const { replace } = useRouter();
  const pathName = usePathname();

  const [events, setEvents] = useState([]);
  const [pages, setPages] = useState({ current: 1, last: 1 });

  const fetchEvents = async (query) => {
    const response = await createdEvents(query);
    setEvents(response.data);
    setPages({
      current: response.current_page,
      last: response.last_page,
    });

    params.set('page', response.current_page);
    replace(`${pathName}?${params.toString()}`);
  };

  useEffect(() => {
    fetchEvents(params.toString());
  }, []);

  const nextPage = () => {
    if (pages.current === pages.last) return;
    params.set('page', pages.current + 1);
    fetchEvents(params.toString());
  };
  const prevPage = () => {
    if (pages.current === 1) return;
    params.set('page', pages.current - 1);
    fetchEvents(params.toString());
  };

  return (
    <div className={styles.dashboard}>
      <DashboardNav />

      <div className={styles.content}>
        <DashboardContent
          title="My Events"
          description="Here you will be able to see the events you organize."
        >
          {events?.map((e, index) => {
            return <EventCard key={index} event={e}></EventCard>;
          })}
          {!events.length && (
            <TextLink href="/events/create">Create your first event</TextLink>
          )}
        </DashboardContent>
        <EventPaginator links={pages} nextPage={nextPage} prevPage={prevPage} />
      </div>
    </div>
  );
}
