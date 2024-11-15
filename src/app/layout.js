import Header from '@/components/organisms/header/Header';
import '@/app/assets/globals.css';
import Footer from '@/components/organisms/footer/Footer';

export async function generateMetadata() {
  return {
    title: 'RouteYou - Discover and share routes',
    description:
      'RouteYou - Your platform for discovering and sharing routes for walking, running, cycling and more.',
    keywords: 'RouteYou, routes, walking, cycling, events',
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
