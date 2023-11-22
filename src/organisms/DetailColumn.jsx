"use client";
import React from "react";
import "@/app/globals.css";
import ButtonLink from "@/atoms/ButtonLink";
import * as colors from "@/utils/colors";
import styles from "@/app/DetailColumn.module.scss";
import BigTitle from "@/atoms/BigTitle";
import SubText from "@/atoms/SubText";
import RegularText from "@/atoms/RegularText";
import ViewMore from "@/molecules/ViewMore";
import CustomButton from "@/atoms/Button";
import ArrowLeftSVG from "@/utils/icons/ArrowLeftSVG";

export default function DetailColumn({ event }) {
  return (
    <div className={styles.column}>
      <img
        className={styles.image}
        src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg"
        alt="cycling event preview"
      />
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
          <CustomButton
            label="share"
            backgroundColor={colors.green}
            borderColor={colors.green}
            fontColor={colors.white}
            // icon={<ArrowLeftSVG />}
            width="100%"
            height="inherit"
            borderRadius={5}
          />
          <ButtonLink link={`./${event.id}/signup`}>singup</ButtonLink>
        </div>
      </div>
    </div>
  );
}
