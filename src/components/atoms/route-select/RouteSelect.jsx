'use client';
import React from 'react';
import styles from './RouteSelect.module.scss';
import AsyncSelect from 'react-select/async';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const options2 = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const groupedOptions = [
  {
    label: 'Your Events',
    options: options,
  },
  {
    label: 'Public Events',
    options: options2,
  },
];

const filterColors = (inputValue) => {
  if (inputValue.trim === '')
    return groupedOptions.map((e) => (e.options = options2));
  groupedOptions.map((e) => {
    e.options = e.options.filter((i) => {
      const filtered = i.label.toLowerCase().includes(inputValue.toLowerCase());
      return filtered;
    });
    return e;
  });
  return groupedOptions;
};

const promiseOptions = (inputValue) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(filterColors(inputValue));
    }, 1000);
  });

export default function RouteSelect() {
  return (
    <AsyncSelect
      id="routeSelect"
      name="routes"
      isMulti
      cacheOptions
      defaultOptions
      loadOptions={promiseOptions}
    />
  );
}
