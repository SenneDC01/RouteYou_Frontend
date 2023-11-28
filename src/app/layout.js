import Head from "next/head";
import Header from "@/organisms/Header";
import HeaderUI from "@//organisms/HeaderUI";
import "./globals.css";
import Footer from "@/organisms/Footer";
import profilePic from "../utils/images/profilePicture.png";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RouteYou - Ontdek en deel routes",
  description:
    "RouteYou - Jouw platform voor het ontdekken en delen van routes voor wandel, loop, fiets en meer.",
  keywords: "RouteYou, routes, wandelen, fietsen, evenementen",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="stylesheet" href="https://unpkg.com/normalize.css" />
      </Head>
      <body>
        <Header profileName={"John Doe"} profilePicture={profilePic} />
        {/*<HeaderUI />*/}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
