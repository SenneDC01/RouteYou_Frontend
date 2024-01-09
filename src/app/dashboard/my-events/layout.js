import Page from './page';
import { createdEvents } from '@/services/EventService';

export async function generateMetadata() {
  return {
    title: `My Events - RouteYou`,
    description: `My Events - My created events on RouteYou.`,
    keywords: 'RouteYou, event, routes, created',
  };
}

export default async function Layout() {
  const events = await createdEvents();
  return Page({ events });
}
