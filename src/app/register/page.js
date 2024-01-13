'use client';
import BigTitle from '@/components/atoms/big-title/BigTitle';
import FormField from '@/components/atoms/form-field/FormField';
import React, { useState } from 'react';
import styles from './RegisterPage.module.scss';
import Button from '@/components/atoms/button/Button';
import SelectField from '@/components/atoms/select-field/SelectField';
import {
  isEmpty,
  isFilled,
  isValidEmail,
  isValidPasswordLength,
} from '@/helpers/FormValidation/FormValidation';
import { register } from '@/services/UserService';
import { useRouter } from 'next/navigation';
import LoadingSpinner from '@/components/molecules/loading-spinner/LoadingSpinner';

const RegisterPage = () => {
  const router = useRouter();
  const [formValues, setFormValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const genderOptions = [
    { value: 'MALE', label: 'Male' },
    { value: 'FEMALE', label: 'Female' },
  ];

  const validateForm = () => {
    const userInfoErrors = validateUserInfo();
    const credentialsErrors = validateCredentials();
    const addressErrors = validateAddress();

    setErrors({
      ...userInfoErrors,
      ...credentialsErrors,
      ...addressErrors,
      formError: errors.formError,
    });
    return (
      isEmpty(userInfoErrors) &&
      isEmpty(credentialsErrors) &&
      isEmpty(addressErrors)
    );
  };

  const validateUserInfo = () => {
    const errors = {};
    if (!isFilled(formValues.firstname)) {
      errors.firstname = 'Please enter your firstname';
    }
    if (!isFilled(formValues.lastname)) {
      errors.lastname = 'Please enter your lastname';
    }
    if (!isFilled(formValues.gender)) {
      errors.gender = 'Please select a gender';
    } else if (
      !genderOptions.map((option) => option.value).includes(formValues.gender)
    ) {
      errors.gender = 'Please select a valid gender';
    }
    return errors;
  };

  const validateCredentials = () => {
    const errors = {};
    if (!isFilled(formValues.email)) {
      errors.email = 'Please enter your email';
    } else if (!isValidEmail(formValues.email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (!isFilled(formValues.password)) {
      errors.password = 'Please enter your password';
    } else if (!isValidPasswordLength(formValues.password)) {
      errors.password = 'Password must be at least 8 characters long';
    }
    if (!isFilled(formValues.password_confirmation)) {
      errors.password_confirmation = 'Please confirm your password';
    } else if (formValues.password !== formValues.password_confirmation) {
      errors.password_confirmation = 'Passwords do not match';
    }
    return errors;
  };

  const validateAddress = () => {
    const errors = {};
    if (!isFilled(formValues.address)) {
      errors.address = 'Please enter your address';
    }
    if (!isFilled(formValues.city)) {
      errors.city = 'Please enter your city';
    }
    if (!isFilled(formValues.zipcode)) {
      errors.zipcode = 'Please enter your zipcode';
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      try {
        setIsLoading(true);
        const response = await register(formValues);

        if (response.code === 201) {
          window.location.reload();
          router.push('/dashboard/my-events');
        } else {
          if (response.errors) {
            const errors = [];
            Object.keys(response.errors).forEach((field) => {
              errors.push(response.errors[field][0]);
            });
            setErrors({ formError: errors });
          } else if (response.message) {
            setErrors({ formError: [response.message] });
          }
        }
      } catch (error) {
        setErrors({ formError: ['Something went wrong try again later.'] });
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <BigTitle className={styles.title}>Register</BigTitle>
        <form
          onSubmit={handleSubmit}
          className={styles.form}
          method="post"
          encType="multipart/form-data"
        >
          {errors?.formError && (
            <>
              <ul>
                {errors.formError?.map((error, index) => (
                  <li className={styles.error} key={index}>
                    {error}
                  </li>
                ))}
              </ul>
            </>
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
        <LoadingSpinner
          isLoading={isLoading}
          message="Checking credentials and registering"
        />
      </div>
    </div>
  );
};

export default RegisterPage;
