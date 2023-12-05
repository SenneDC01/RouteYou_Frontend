// 'use client';
import React from "react";
import DashboardLink from "@/components/atoms/dashboard-link/DashboardLink";

export default function Page({ params }) {
  return (
    <div>
      <DashboardLink link="/events">Events</DashboardLink>
      Event: {params.id}
    </div>
  );
}
