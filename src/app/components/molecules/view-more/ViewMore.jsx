"use client";
import React from "react";
import styles from "@/app/ViewMore.module.scss";
import BoldText from "@/app/components/atoms/bold-text/BoldText";
import ButtonLink from "@/app/components/atoms/button-link/ButtonLink";

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
