'use client';
import '../DashboardStyling.css';
import styles from '../DashboardPage.module.scss';
import DashboardNav from '@/components/organisms/dashboard-nav/DashboardNav';
import DashboardContent from '@/components/organisms/dashboard-content/DashboardContent';
import { completedEvents } from '@/services/EventService';
import RegularText from '@/components/atoms/regular-text/RegularText';
import BadgeCard from '@/components/organisms/badge-card/BadgeCard';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import EventPaginator from '@/components/organisms/event-paginator/EventPaginator';

export default function CompletedEventsPage() {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const { replace } = useRouter();
  const pathName = usePathname();

  const [events, setEvents] = useState([]);
  const [pages, setPages] = useState({ current: 1, last: 1 });

  const fetchEvents = async (query) => {
    const response = await completedEvents(query);

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
          title="Completed Events"
          description="Here you will be able to see the events you have completed."
        >
          {events?.map((event, index) => {
            return <BadgeCard event={event} key={index} />;
          })}
          {!events.length && (
            <RegularText>
              You haven&apos;t completed an event yet, keep moving and
              participate in events.
            </RegularText>
          )}
        </DashboardContent>
        <EventPaginator links={pages} nextPage={nextPage} prevPage={prevPage} />
      </div>
    </div>
  );
}
