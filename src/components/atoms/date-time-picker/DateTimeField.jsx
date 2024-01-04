import React from 'react';
import styles from './DateTimeField.module.scss';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import SmallText from '../small-text/SmallText';
import dayjs from 'dayjs';

export default function DateTimeField({
  label,
  value,
  name,
  onChange,
  errorMessage,
  className,
}) {
  const handleChange = (e) => {
    onChange({
      name: name,
      value: dayjs(e).format('YYYY-MM-DD HH:mm:ss'),
    });
  };

  const labell = () => {
    <label className={[styles.label]} htmlFor={name} aria-labelledby={name}>
      {label}
    </label>;
  };

  return (
    <div
      className={[
        styles.dateTimeField,
        className,
        errorMessage !== '' ? styles.invalid : '',
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
                className: errorMessage !== '' ? styles.invalid : '',
              },
            },
          }}
          className=""
          name={name}
          value={value}
          onChange={handleChange}
        />
      </LocalizationProvider>
      {errorMessage && (
        <SmallText className={styles.error}>{errorMessage}</SmallText>
      )}
    </div>
  );
}
