"use client";
import FormField from "@/components/atoms/form-field/FormField";
import React, { useState } from "react";
import styles from "./LoginPage.module.scss";
import BigTitle from "@/components/atoms/big-title/BigTitle";
import Button from "@/components/atoms/button/Button";
import RegularText from "@/components/atoms/regular-text/RegularText";
import TextLink from "@/components/atoms/text-link/TextLink";
import {
  isPasswordFilled,
  isValidEmail,
} from "@/helpers/FormValidation/FormValidation";
import { login } from "@/services/UserService";

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
    setErrors({ ...newErrors, formError: errors.formError });
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await login(formValues);

        if (response.code === 200) {
          console.log("Redirect User");
          // TODO Redirect User
          //! Load page in chrome and check next error
        } else {
          setErrors({ formError: response.message });
        }
      } catch (error) {
        setErrors({ formError: "Something went wrong try again later" });
      }
    }
  };

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <BigTitle className={styles.title}>Login</BigTitle>
        <form onSubmit={handleSubmit} className={styles.form} method="post">
          {errors.formError && (
            <p className={styles.error}>{errors.formError}</p>
          )}
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
    </div>
  );
};

export default Page;
