export async function generateMetadata() {
  return {
    title: `My Events - RouteYou`,
    description: `My Events - My created events on RouteYou.`,
    keywords: 'RouteYou, event, routes, created',
  };
}

export default async function Layout({ children }) {
  return children;
}
