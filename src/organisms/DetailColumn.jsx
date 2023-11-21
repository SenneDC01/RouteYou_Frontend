"use client";
import React from "react";
import { useEffect } from "react";
import "@/app/globals.css";
import { useRouter } from "next/navigation";
import CustomButton from "@/atoms/Button";
import * as colors from "@/utils/colors";
import styles from "@/app/DetailColumn.module.scss";
import Header from "@/organisms/header";
import Footer from "@/organisms/footer";
import BigTitle from "@/atoms/BigTitle";
import SubText from "@/atoms/SubText";
import RegularText from "@/atoms/RegularText";
import ViewMore from "@/atoms/ViewMore";

export default function DetailColumn({ event }) {
  return (
    <div className={styles.column}>
      <img
        className={styles.image}
        src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg"
        alt="cycling event preview"
      />
      <BigTitle>Groene Gordel 2024</BigTitle>
      <SubText>
        Toerisme vlaanderen <br />
        29 oktober 2023 - 09:00
      </SubText>
      <RegularText>
        Ontdek naast de prachtige in herfstkleuren gehulde natuur ook ons
        cultureel erfgoed, in en rond de dreven van Merksplas Kolonie. Wandelen
        in 3 lussen van 8 km, naar hartenlust onderling combineerbaar tot 16 en
        24 km om volop van al het moois te genieten. Tevens voorzien wij een lus
        van 4 km die geschikt is voor kinderwagens
      </RegularText>
    </div>
  );
}
