"use client";
import React from "react";
import "@/app/assets/globals.css";
import ButtonLink from "@/components/atoms/button-link/ButtonLink";
import styles from "./DetailColumn.module.scss";
import BigTitle from "@/components/atoms/big-title/BigTitle";
import SubText from "@/components/atoms/sub-text/SubText";
import RegularText from "@/components/atoms/regular-text/RegularText";
import ViewMore from "@/components/molecules/view-more/ViewMore";
import ArrowLeftSVG from "@/utils/icons/ArrowLeftSVG";
import Button from "@/components/atoms/button/Button";
import Image from "next/image";

export default function DetailColumn({ event }) {
  return (
    <div className={styles.column} data-testid="detail_column">
      <div className={styles.imageContainer}>
        <Image
          src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg"
          priority={true}
          alt="cycling event preview"
          className={styles.image}
          width={400}
          height={400}
        />
      </div>
      <div className={styles.columnContent}>
        <BigTitle>{event.name}</BigTitle>
        <SubText>
          {event.author} <br />
          {event.start_date}
        </SubText>
        <RegularText>{event.description}</RegularText>
        <ViewMore link={`./${event.id}/posts`}>Posts</ViewMore>
        <ViewMore link={`./${event.id}/pictures`}>Pictures</ViewMore>
        <div className={styles.row}>
          <Button label="Share" link="#" />
          <ButtonLink link={`./${event.id}/signup`}>sign-up</ButtonLink>
        </div>
      </div>
    </div>
  );
}
