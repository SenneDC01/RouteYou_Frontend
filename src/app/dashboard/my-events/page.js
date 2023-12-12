"use client"
import React, { useEffect, useState } from "react";
import DashboardNav from "@/components/organisms/dashboard-nav/DashboardNav";
import DashboardContent from "@/components/organisms/dashboard-content/DashboardContent";
import EventCard from "@/components/organisms/event-card/EventCard";
import { createdEvents } from "@/services/EventService"

// export async function getStaticProps() {
//   const events = await createdEvents();
//   return {
//     props: {
//       events,
//     },
//   };
// }

export default function Page() {
  const [events, setEvents] = useState(null);
  useEffect(() => {
    createdEvents()
      .then((data) => {
        setEvents(data)
        console.log(data)
      })
  })

  return (
    <div>
      <DashboardNav />
      {events ? <DashboardContent title='My Events' description='Here you will be able to see the events you organize.'>
        {/* {Object.entries((e) => {
          return <p>{e}</p>;
        })} */}
        {events.map((e, index) => {
          return <EventCard key={index} event={e}></EventCard>
        })}
      </DashboardContent> : ""}
    </div>
  );
}
