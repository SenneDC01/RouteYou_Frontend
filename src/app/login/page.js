import FormField from "@/components/atoms/form-field/FormField";
import React from "react";
import styles from "./LoginPage.module.scss";
import BigTitle from "@/components/atoms/big-title/BigTitle";
import Button from "@/components/atoms/button/Button";
import Image from "next/image";
import bannerImage from "@/utils/images/banner.jpg";
import RegularText from "@/components/atoms/regular-text/RegularText";
import TextLink from "@/components/atoms/text-link/TextLink";

const Page = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <BigTitle className={styles.title}>Login</BigTitle>
        <FormField
          label="Email"
          name="Email"
          type="email"
          // errorMessage="Dit veld is verplicht"
        />
        <FormField
          label="Password"
          name="Password"
          type="password"
          // errorMessage="Dit veld is verplicht"
        />
        <Button label="Login">Login</Button>
        <RegularText>Or <TextLink href="/register">create</TextLink> an account</RegularText>
      </div>

      <Image src={bannerImage} priority={true} alt="Fietser in bos" className={styles.image}/>
    </div>
  );
};

export default Page;
