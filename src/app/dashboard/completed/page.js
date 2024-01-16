import '../DashboardStyling.css';
import styles from '../DashboardPage.module.scss';
import DashboardNav from '@/components/organisms/dashboard-nav/DashboardNav';
import DashboardContent from '@/components/organisms/dashboard-content/DashboardContent';
import { completedEvents } from '@/services/EventService';
import RegularText from '@/components/atoms/regular-text/RegularText';
import BadgeCard from '@/components/organisms/badge-card/BadgeCard';

export async function generateMetadata() {
  return {
    title: `Completed Events - RouteYou`,
    description: `Completed Events - My completed events on RouteYou.`,
    keywords: 'RouteYou, event, routes, completed',
  };
}

export default async function CompletedEventsPage() {
  const { events } = await completedEvents();

  return (
    <div className={styles.dashboard}>
      <DashboardNav />
      <DashboardContent
        title="Completed Events"
        description="Here you will be able to see the events you have completed."
      >
        {events.data.map((event, index) => {
          return <BadgeCard event={event} key={index} />;
        })}
        {!events.data.length && (
          <RegularText>
            You haven&apos;t completed an event yet, keep moving and participate
            in events.
          </RegularText>
        )}
      </DashboardContent>
    </div>
  );
}
