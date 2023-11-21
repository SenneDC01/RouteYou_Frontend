"use client";
import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import "@/app/globals.css";
import CustomButton from "@/atoms/Button";
import * as colors from "@/utils/colors";
import Header from "@/organisms/header";
import Footer from "@/organisms/footer";
import DetailColumn from "@/organisms/DetailColumn";

export default function Page({ params }) {
  const router = useRouter();

  useEffect(() => {
    return router.push(`./420`);
  });

  //   return <div>Event ID: {params.id}</div>;
  return <DetailColumn />;
}
