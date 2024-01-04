import Page from './page';
import { interestedEvents } from '@/services/EventService';

export async function generateMetadata() {
  return {
    title: `Interested Events - RouteYou`,
    description: `Interested Events - My interested events on RouteYou.`,
    keywords: 'RouteYou, event, routes, interested',
  };
}

export default async function Layout() {
  const events = await interestedEvents();
  return Page({ events });
}
