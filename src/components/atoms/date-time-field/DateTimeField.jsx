import React from 'react';
import styles from './DateTimeField.module.scss';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import SmallText from '../small-text/SmallText';

export default function DateTimeField({
  label,
  value,
  name,
  onChange,
  errorMessage,
  className,
  disabled,
}) {
  const handleChange = (e) => {
    onChange({
      target: {
        name: name,
        value: e,
      },
    });
  };

  return (
    <div
      className={[
        styles.dateTimeField,
        className,
        errorMessage ? styles.invalid : '',
      ].join(' ')}
    >
      <label className={[styles.label]} htmlFor={name}>
        {label}
      </label>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker
          slotProps={{
            textField: {
              inputProps: {
                id: name,
                className: errorMessage ? styles.invalid : '',
              },
            },
          }}
          ampm={false}
          className=""
          name={name}
          value={value}
          onChange={handleChange}
          disabled={disabled}
        />
      </LocalizationProvider>
      {errorMessage && (
        <SmallText className={styles.error}>{errorMessage}</SmallText>
      )}
    </div>
  );
}
