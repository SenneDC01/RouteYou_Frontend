'use client';
import React from 'react';
import styles from './RouteSelect.module.scss';
import AsyncSelect from 'react-select/async';
import { searchPrivateRoute, searchPublicRoute } from '@/services/RouteService';
import SmallText from '../small-text/SmallText';

export default function RouteSelect({
  id,
  label,
  placeholder,
  name,
  value,
  onChange,
  errorMessage,
  className,
  disabled,
}) {
  const privateRoutes = {
    label: 'Your Routes',
    options: [],
  };
  const publicRoutes = {
    label: 'Public Routes',
    options: [],
  };

  const handleChange = (e) => {
    const values = e.map((option) => {
      return option.value;
    });
    onChange({
      target: {
        name: name,
        value: values,
      },
    });
  };

  const getRoutes = async (input) => {
    let priv = await searchPrivateRoute(input);
    let pub = await searchPublicRoute(input);
    pub = pub.map((route) => {
      return {
        label: route.name.en,
        value: route.id,
      };
    });
    priv = priv.map((route) => {
      return {
        label: route.name,
        value: route.id,
      };
    });

    return [
      { ...privateRoutes, options: priv },
      { ...publicRoutes, options: pub },
    ];
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
        id={id}
        inputId={name}
        name={name}
        placeholder={placeholder}
        className={[styles.field, errorMessage ? styles.invalid : ''].join(' ')}
        onChange={handleChange}
        isMulti
        defaultOptions={true}
        defaultValue={value}
        loadOptions={promiseOptions}
        isDisabled={disabled}
      />
      {errorMessage && (
        <SmallText className={styles.error}>{errorMessage}</SmallText>
      )}
    </div>
  );
}
