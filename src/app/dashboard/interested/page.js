import React from 'react';
import DashboardNav from '@/components/organisms/dashboard-nav/DashboardNav';
import DashboardContent from '@/components/organisms/dashboard-content/DashboardContent';
import EventCard from '@/components/organisms/event-card/EventCard';
import styles from '../DashboardPage.module.scss';
import '../DashboardStyling.css';
import RegularText from '@/components/atoms/regular-text/RegularText';

export default async function Page({ events }) {
  return (
    <div className={styles.dashboard}>
      <DashboardNav />
      <DashboardContent
        title="Interested Events"
        description="Here you will be able to see the events you are interested in."
      >
        {events?.map((e, index) => {
          return <EventCard key={index} event={e}></EventCard>;
        })}
        {!events.length && (
          <RegularText>There are no events you are interested in.</RegularText>
        )}
      </DashboardContent>
    </div>
  );
}
