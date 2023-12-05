"use client";
import BigTitle from "@/components/atoms/big-title/BigTitle";
import FormField from "@/components/atoms/form-field/FormField";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./RegisterPage.module.scss";
import bannerImage from "@/utils/images/banner.jpg";
import Button from "@/components/atoms/button/Button";
import SelectField from "@/components/atoms/select-field/SelectField";

const RegisterPage = () => {
  const [formValues, setFormValues] = useState({});
  const [errors, setErrors] = useState({});

  const genderOptions = [
    { value: "MALE", label: "Male" },
    { value: "FEMALE", label: "Female" },
  ];

  const validateForm = () => {
    // TODO Validate Form
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      // TODO Register User
    }
  };

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <BigTitle className={styles.title}>Register</BigTitle>
        <form onSubmit={handleSubmit} className={styles.form}>
          {errors.formError && (
            <p className={styles.error}>{errors.formError}</p>
          )}
          <FormField
            label="Firstname"
            name="firstname"
            type="text"
            onChange={handleChange}
            errorMessage={errors.firstname}
          />
          <FormField
            label="Lastname"
            name="lastname"
            type="text"
            onChange={handleChange}
            errorMessage={errors.lastname}
          />
          <SelectField
            label="Gender"
            name="gender"
            options={genderOptions}
            value={formValues.gender}
            onChange={handleChange}
            errorMessage={errors.gender}
          />
          <FormField
            label="Email"
            name="email"
            type="email"
            onChange={handleChange}
            errorMessage={errors.email}
          />
          <FormField
            label="Address"
            name="address"
            type="text"
            onChange={handleChange}
            errorMessage={errors.address}
          />
          <div className={styles.formFlex}>
            <FormField
              label="City"
              name="city"
              type="text"
              onChange={handleChange}
              errorMessage={errors.city}
              className={styles.city}
            />
            <FormField
              label="Zipcode"
              name="zipcode"
              type="number"
              onChange={handleChange}
              errorMessage={errors.zipcode}
              className={styles.zipcode}
            />
          </div>
          <FormField
            label="Profile Picture"
            name="profile_picture"
            type="file"
            onChange={handleChange}
            errorMessage={errors.profile_picture}
          />
          <FormField
            label="Password"
            name="password"
            type="password"
            onChange={handleChange}
            errorMessage={errors.password}
          />
          <FormField
            label="Confirm Password"
            name="password_confirmation"
            type="password"
            onChange={handleChange}
            errorMessage={errors.password_confirmation}
          />
          <Button type="submit">Register</Button>
        </form>
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

export default RegisterPage;
