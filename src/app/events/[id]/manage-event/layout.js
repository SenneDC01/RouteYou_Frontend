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

const mockEvent = [
  {
    id: 1,
    name: 'Groene Gordel 2024',
    image_url: 'url',
    description:
      'Ontdek naast de prachtige in herfstkleuren gehulde natuur ook ons cultureel erfgoed, in en rond de dreven van Merksplas Kolonie. Wandelen in 3 lussen van 8 km, naar hartenlust onderling combineerbaar tot 16 en 24 km om volop van al het moois te genieten. Tevens voorzien wij een lus van 4 km die geschikt is voor kinderwagens',
    author: 'Toerisme vlaanderen',
    start_date: '29 oktober 2023 - 09:00',
  },
];

export default async function ManageEventLayout({ children, params }) {
  //const { event } = await getEventInfo(params.id);

  return <ManageEventPage event={mockEvent[0]}>{children}</ManageEventPage>;
}
