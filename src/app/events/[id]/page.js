"use client";
import React from "react";
import styles from "./DetailPage.module.scss";
import "@/app/assets/globals.css";
import DetailColumn from "@/components/organisms/detail-column/DetailColumn";

export default function Page({ event }) {
  // const event = {
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
  // };
  // const [key, setKey] = useState(true);
  // const [value, setValue] = useState("");

  // useEffect(() => {
  //   const iframe = document.querySelector("#iframe");
  //   console.log(iframe);
  //   iframe.src =
  //     "http://plugin.routeyou.com/routeviewer/basic/?key=25578206faf6c7cd92fc96526177379d&language=en&params.route.id=" +
  //     6833170 +
  //     "&tabPane.position=null&map.api.key=AIzaSyAjwTWF01bBdAC3jSjbfdLGNuj5G6SVXq0&map.route.line.normal.standard.color=%23777777&map.route.line.normal.standard.width=5&map.route.line.normal.standard.opacity=1&map.route.line.normal.standard.fill.color=%23eb9334&map.route.line.normal.standard.fill.width=3&map.route.line.normal.standard.fill.opacity=0.7&map.route.line.normal.satellite.color=%23AAAAAA&style.fill.color=%23eb9334&style.fill.opacity=0.73&style.line.width=&style.line.color=%23777777&map.availableTypes=%5B%22satellite%22,%22roadmap%22,%22osm%22,%22terrain%22%5D&map.overlays=%5B%22hybrid%22,%22terrain%22%5D&map.type=satellite&map.show.startControl=true&map.show.instruction=true&map.show.positionData=true&";
  //   setKey(key + 1);
  //   setTimeout(() => {
  //     console.log("delay");
  //   }, 1000);
  //   console.log("tweed ", iframe);
  // }, []);

  return (
    <div className={styles.detailPage}>
      <DetailColumn event={event} />
      <iframe
        title="Interactive map with the route of the event"
        className={styles.map}
        key="1"
        id="iframe"
        src={`https://plugin.routeyou.com/routeviewer/basic/?key=25578206faf6c7cd92fc96526177379d&language=en&params.route.id=${event.routes[0].route_data.id}&tabPane.position=null&map.api.key=AIzaSyAjwTWF01bBdAC3jSjbfdLGNuj5G6SVXq0&map.route.line.normal.standard.color=%2a2a2a&map.route.line.normal.standard.width=5&map.route.line.normal.standard.opacity=1&map.route.line.normal.standard.fill.color=%2a2a2a&map.route.line.normal.standard.fill.width=3&map.route.line.normal.standard.fill.opacity=0.7&map.route.line.normal.satellite.color=%2a2a2a&style.fill.color=%2a2a2a&style.fill.opacity=0.73&style.line.width=&style.line.color=%2a2a2a&map.type=terrain&map.show.startControl=true&map.show.instruction=true&map.show.positionData=true&`}
        width="100%"
        frameBorder="0"
        allow="geolocation"
        allowFullScreen
      ></iframe>
    </div>
  );
}
