import React from 'react';
import DashboardNav from '@/components/organisms/dashboard-nav/DashboardNav';
import DashboardContent from '@/components/organisms/dashboard-content/DashboardContent';
import EventCard from '@/components/organisms/event-card/EventCard';
import styles from '../DashboardPage.module.scss';
import '../DashboardStyling.css';
import TextLink from '@/components/atoms/text-link/TextLink';
import SmallText from '@/components/atoms/small-text/SmallText';

export default function Page({ events }) {
  return (
    <div className={styles.dashboard}>
      <DashboardNav />

      <DashboardContent
        title="Sign Ups"
        description="These are the events you have singed up for."
      >
        {(events.code < 200 || events.code >= 300) && (
          <SmallText className={styles.error}>
            Something went wrong while getting your events
          </SmallText>
        )}
        {events.code >= 200 &&
          events.code < 300 &&
          events.events.data?.map((e, index) => {
            return <EventCard key={index} event={e}></EventCard>;
          })}
        {events.code >= 200 &&
          events.code < 300 &&
          !events.events.data.length && (
            <div className={styles.noEvents}>
              <p>You haven&apos;t signed up for any events.</p>
              <TextLink href="/events/create">Search for one here</TextLink>
            </div>
          )}
      </DashboardContent>
    </div>
  );
}
