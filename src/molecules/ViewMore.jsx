"use client";
import React from "react";
import styles from "@/app/fonts.module.scss";
import BoldText from "@/atoms/BoldText";
import Button from "@/atoms/Button";

export default function BigTitle({ label, link }) {
  return (
    <div>
      <BoldText>{label}</BoldText>
      <Button></Button>
    </div>
  );
}
