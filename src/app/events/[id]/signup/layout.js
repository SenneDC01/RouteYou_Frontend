import { eventDetail } from '@/services/EventService';
import SignUpPage from './page';
import { redirect } from 'next/navigation';

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
    title: `Sign Up ${event.name} - RouteYou`,
    description: `Event: ${event.name} - Sign up for this great event on RouteYou.`,
    keywords: 'RouteYou, event, routes, registration, signup',
  };
}

export default async function SignUpLayout({ children, params }) {
  const { event } = await getEventInfo(params.id);
  
  return <SignUpPage event={event}>{children}</SignUpPage>;
}
