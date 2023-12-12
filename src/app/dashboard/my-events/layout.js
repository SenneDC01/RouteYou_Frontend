import Page from "./page";

export const metadata = {
  title: "City Light Run Aalst - RouteYou",
  description:
    "Evenement: City Light Run Aalst - Ontdek de route en schrijf je in voor dit geweldige evenement op RouteYou.",
  keywords: "RouteYou, evenement, routes, inschrijven",
};

export default async function Layout({ children }) {
  // const events = [{
  //   id: 1,
  //   name: "City Light Run Aalst",
  //   description: "Loop langs de mooiste parels van Aalst",
  //   start_date: "2024-04-22 21:00:00",
  //   max_participants: 1000,
  //   price: "5.00",
  //   visibility: "PUBLIC",
  //   image_url: "http://localhost:8080/storage/images/no-profile-picture.png",
  //   author: "Senna Uyttersprot",
  //   routes: [
  //     {
  //       route_data: {
  //         id: 6833170,
  //         duration: "1.2km",
  //         startAddress: "Aalst, Oost-Vlaanderen, Vlaanderen",
  //         type: "Looproute",
  //         difficulty: 0.3,
  //       },
  //     },
  //   ],
  // },
  // {
  //   id: 2,
  //   name: "Nekeer rijden met de velo",
  //   description: "Rij langs de mooiste parels van Aalst",
  //   start_date: "2024-04-22 21:00:00",
  //   max_participants: 1000,
  //   price: "5.00",
  //   visibility: "PUBLIC",
  //   image_url: "http://localhost:8080/storage/images/no-profile-picture.png",
  //   author: "Senna Uyttersprot",
  //   routes: [
  //     {
  //       route_data: {
  //         id: 6833170,
  //         duration: "1.2km",
  //         startAddress: "Aalst, Oost-Vlaanderen, Vlaanderen",
  //         type: "Looproute",
  //         difficulty: 0.3,
  //       },
  //     },
  //   ],
  // }];

  return <Page >{children}</Page>;
}
