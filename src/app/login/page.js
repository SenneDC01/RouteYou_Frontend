import FormField from "@/components/atoms/form-field/FormField";
import React from "react";
import styles from "./LoginPage.module.scss";
import BigTitle from "@/components/atoms/big-title/BigTitle";
import Button from "@/components/atoms/button/Button";

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
      </div>
    </div>
  );
};

export default Page;
