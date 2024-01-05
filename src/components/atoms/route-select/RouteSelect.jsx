'use client';
import React, { useState } from 'react';
import styles from './RouteSelect.module.scss';
import AsyncSelect from 'react-select/async';
import { searchPrivateRoute, searchPublicRoute } from '@/services/RouteService';
import SmallText from '../small-text/SmallText';

// const options = [
//   { value: 'chocolate', label: 'Chocolate' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla' },
// ];

// const options2 = [
//   { value: 'chocolate', label: 'Chocolate' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla' },
// ];

// const groupedOptions = [
//   {
//     label: 'Your Events',
//     options: {},
//   },
//   {
//     label: 'Public Events',
//     options: {},
//   },
// ];

export default function RouteSelect({
  label,
  placeholder,
  name,
  onChange,
  errorMessage,
  className,
}) {
  const [privateRoutes, setPrivateRoutes] = useState({
    label: 'Your Routes',
    options: {},
  });
  const [publicRoutes, setPublicRoutes] = useState({
    label: 'Public Routes',
    options: {},
  });

  const getRoutes = async (input) => {
    //if (inputValue.trim === '')
    //  return groupedOptions.map((e) => (e.options = options2));
    // groupedOptions.map((e) => {
    // e.options = e.options.filter((i) => {
    // const filtered = i.label.toLowerCase().includes(inputValue.toLowerCase());
    // return filtered;
    // });
    // return e;
    // });
    // return groupedOptions;
    const priv = await searchPrivateRoute(input);
    const pub = await searchPublicRoute(input);
    setPrivateRoutes({ ...privateRoutes, options: priv });
    setPublicRoutes({ ...privateRoutes, options: pub });
    return [...privateRoutes, ...publicRoutes];
  };

  const promiseOptions = async (input) => {
    return await getRoutes(input);
  };

  return (
    <div className={[styles.formField, className].join(' ')}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <AsyncSelect
        inputId={name}
        name={name}
        placeholder={placeholder}
        className={[styles.field, errorMessage ? styles.invalid : ''].join(' ')}
        isMulti
        cacheOptions
        defaultOptions
        loadOptions={promiseOptions}
      />
      {errorMessage && (
        <SmallText className={styles.error}>{errorMessage}</SmallText>
      )}
    </div>
  );
}
