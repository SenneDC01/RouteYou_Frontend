export function generateMetadata() {
  return {
    title: 'Search Event - RouteYou',
    description: 'Search an event on RouteYou.',
    keywords: 'RouteYou, search, event, search event',
  };
}

export default async function EventsPage({ children }) {
  return children;
}
