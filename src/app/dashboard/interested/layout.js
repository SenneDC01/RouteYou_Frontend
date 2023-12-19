import Page from './page';
import { interestedEvents } from '@/services/EventService';

export const metadata = {
  title: 'City Light Run Aalst - RouteYou',
  description:
    'Evenement: City Light Run Aalst - Ontdek de route en schrijf je in voor dit geweldige evenement op RouteYou.',
  keywords: 'RouteYou, evenement, routes, inschrijven',
};

export default async function Layout() {
  const events = await interestedEvents();
  return Page({ events });
}
