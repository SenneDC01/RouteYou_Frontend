"use client";
import React from "react";
import styles from "@/app/ViewMore.module.scss";
import BoldText from "@/atoms/BoldText";
import ButtonLink from "@/atoms/ButtonLink";

export default function BigTitle({ children, link }) {
  return (
    <div className={styles.viewMore}>
      <BoldText>{children}</BoldText>
      <ButtonLink width="fit-content" link={link}>
        more
      </ButtonLink>
    </div>
  );
}
