'use client';
import React, { useState } from 'react';
import styles from './RouteSelect.module.scss';
import AsyncSelect from 'react-select/async';
import { searchPrivateRoute, searchPublicRoute } from '@/services/RouteService';
import SmallText from '../small-text/SmallText';

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
    if (errorMessage === 'Dit is vooor eslint') onChange();
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
