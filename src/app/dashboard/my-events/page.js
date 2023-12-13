import React from "react";
import DashboardNav from "@/components/organisms/dashboard-nav/DashboardNav";
import DashboardContent from "@/components/organisms/dashboard-content/DashboardContent";
import EventCard from "@/components/organisms/event-card/EventCard";
import styles from "./MyEventsPage.module.scss"

export default async function Page({ events }) {
  return (
    <div className={styles.dashboard}>
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
