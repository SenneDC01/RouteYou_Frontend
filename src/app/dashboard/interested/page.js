import React from "react";
import DashboardNav from "@/components/organisms/dashboard-nav/DashboardNav";
import DashboardContent from "@/components/organisms/dashboard-content/DashboardContent";
import EventCard from "@/components/organisms/event-card/EventCard";
import styles from "./InterestedPage.module.scss";

export default async function Page({ events }) {
  return (
    <div className={styles.dashboard}>
      <DashboardNav />
      {events ? (
        <DashboardContent
          title="Interested Events"
          description="These are the events you are interested in."
        >
          {events.map((e, index) => {
            return <EventCard key={index} event={e}></EventCard>;
          })}
        </DashboardContent>
      ) : (
        ""
      )}
    </div>
  );
}
