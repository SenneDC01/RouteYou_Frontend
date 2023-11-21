"use client";
import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import "@/app/globals.css";
import DetailColumn from "@/organisms/DetailColumn";

export default function Page({ params }) {
  const router = useRouter();

  useEffect(() => {
    return router.push(`./420`);
  });

  //   return <div>Event ID: {params.id}</div>;
  return <DetailColumn />;
}
