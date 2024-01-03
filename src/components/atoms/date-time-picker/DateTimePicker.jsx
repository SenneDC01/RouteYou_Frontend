import React from 'react';
import styles from './FormField.module.scss';
import SmallText from '../small-text/SmallText';

export default function DateTimePicker({
  label,
  value,
  name,
  onChange,
  errorMessage,
  className,
}) {
  return <div className={[styles.formField, className].join(' ')}></div>;
}
