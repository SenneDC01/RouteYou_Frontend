import Header from "@/organisms/header";
import "./globals.css";
import Footer from "@/organisms/footer";
import Head from "next/head";

export const metadata = {
  title: "RouteYou - Ontdek en deel routes",
  description: "RouteYou - Jouw platform voor het ontdekken en delen van routes voor wandel, loop, fiets en meer.",
  keywords: "RouteYou, routes, wandelen, fietsen, evenementen",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="stylesheet" href="https://unpkg.com/normalize.css" />
      </Head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
