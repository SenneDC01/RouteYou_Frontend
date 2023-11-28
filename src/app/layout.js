import Head from "next/head";
import Header from "@/components/organisms/header/Header";
import "@/app/assets/globals.css";
import Footer from "@/components/organisms/footer/Footer";
import profilePic from "@/utils/images/profilePicture.png";

export const metadata = {
  title: "RouteYou - Ontdek en deel routes",
  description:
    "RouteYou - Jouw platform voor het ontdekken en delen van routes voor wandel, loop, fiets en meer.",
  keywords: "RouteYou, routes, wandelen, fietsen, evenementen",
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <Head></Head>
      <body>
        <Header profileName={"John Doe"} profilePicture={profilePic} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
