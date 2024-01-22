import { eventDetail } from '@/services/EventService';
import { redirect } from 'next/navigation';
import ManageEventPage from './page';

const getEventInfo = async (eventId) => {
  try {
    const response = await eventDetail(eventId);

    if (response.code !== 200) {
      redirect('/');
    }
    return response;
  } catch (error) {
    redirect('/');
  }
};

export async function generateMetadata({ params }) {
  const { event } = await getEventInfo(params.id);

  return {
    title: `Manage ${event.name} - RouteYou`,
    description: `Event: ${event.name} - Manage this event on RouteYou.`,
    keywords: 'RouteYou, event, routes, manage',
  };
}

export default async function ManageEventLayout({ children, params }) {
  const { event } = await getEventInfo(params.id);

  console.log(event);
  console.log(event.routes);
  return <ManageEventPage event={event}>{children}</ManageEventPage>;
}
