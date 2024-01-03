import SignUpPage from './page';

export const metadata = {
  title: 'City Light Run Aalst - RouteYou',
  description:
    'Event: City Light Run Aalst - Discover the route and register for this great event on RouteYou.',
  keywords: 'RouteYou, event, routes, registration',
};

export default function SignUpLayout({ children }) {
  const event = {
    id: 1,
    name: 'City Light Run Aalst',
    description: 'Loop langs de mooiste parels van Aalst',
    start_date: '2024-04-22 21:00:00',
    max_participants: 1000,
    price: '5.00',
    visibility: 'PUBLIC',
    image_url: 'http://localhost:8080/storage/images/no-profile-picture.png',
    author: 'Senna Uyttersprot',
    routes: [
      {
        route_data: {
          id: 6833170,
          duration: '1.2km',
          startAddress: 'Aalst, Oost-Vlaanderen, Vlaanderen',
          type: 'Looproute',
          difficulty: 0.3,
        },
      },
    ],
  };
  return <SignUpPage event={event}>{children}</SignUpPage>;
}
