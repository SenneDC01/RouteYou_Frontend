import Page from './page';
import { signedUpEvents } from '@/services/EventService';

export async function generateMetadata() {
  return {
    title: `Sign Ups - RouteYou`,
    description: `Sign Ups - My created events on RouteYou.`,
    keywords: 'RouteYou, event, routes, created',
  };
}

export default async function Layout() {
  const events = await signedUpEvents();
  return Page({ events });
}
