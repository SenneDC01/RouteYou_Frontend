"use client";
import FormField from "@/components/atoms/form-field/FormField";
import React, { useState } from "react";
import styles from "./LoginPage.module.scss";
import BigTitle from "@/components/atoms/big-title/BigTitle";
import Button from "@/components/atoms/button/Button";
import Image from "next/image";
import bannerImage from "@/utils/images/banner.jpg";
import RegularText from "@/components/atoms/regular-text/RegularText";
import TextLink from "@/components/atoms/text-link/TextLink";
import {
  isPasswordFilled,
  isValidEmail,
} from "@/helpers/FormValidation/FormValidation";

const Page = () => {
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });

  const validateForm = () => {
    let newErrors = {};
    if (!isValidEmail(formValues.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!isPasswordFilled(formValues.password)) {
      newErrors.password = "Vul een wachtwoord in";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Submit form to backend
      console.log("Form Is Valid");
    }
  };

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <BigTitle className={styles.title}>Login</BigTitle>
        <form onSubmit={handleSubmit} className={styles.form}>
          <FormField
            label="Email"
            name="email"
            type="email"
            onChange={handleChange}
            errorMessage={errors.email}
          />
          <FormField
            label="Password"
            name="password"
            type="password"
            onChange={handleChange}
            errorMessage={errors.password}
          />
          <Button type="submit">Login</Button>
        </form>
        <RegularText>
          Or <TextLink href="/register">create</TextLink> an account
        </RegularText>
      </div>

      <Image
        src={bannerImage}
        priority={true}
        alt="Fietser in bos"
        className={styles.image}
      />
    </div>
  );
};

export default Page;
