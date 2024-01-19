export async function generateMetadata() {
  return {
    title: `Completed Events - RouteYou`,
    description: `Completed Events - My completed events on RouteYou.`,
    keywords: 'RouteYou, event, routes, completed',
  };
}

export default async function Layout({ children }) {
  return children;
}
