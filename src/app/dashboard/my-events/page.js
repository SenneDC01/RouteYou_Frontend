import React from 'react';
import DashboardNav from '@/components/organisms/dashboard-nav/DashboardNav';
import DashboardContent from '@/components/organisms/dashboard-content/DashboardContent';
import EventCard from '@/components/organisms/event-card/EventCard';
import styles from '../DashboardPage.module.scss';
import '../DashboardStyling.css';
import TextLink from '@/components/atoms/text-link/TextLink';

export default async function Page({ events }) {
  return (
    <div className={styles.dashboard}>
      <DashboardNav />

      <DashboardContent
        title="My Events"
        description="Here you will be able to see the events you organize."
      >
        {events.length &&
          events.map((e, index) => {
            return <EventCard key={index} event={e}></EventCard>;
          })}
        {!events.length && (
          <TextLink href="/events/create">Create your first event</TextLink>
        )}
      </DashboardContent>
    </div>
  );
}
