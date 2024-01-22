import React from 'react';
import styles from './TextArea.module.scss';
import SmallText from '../small-text/SmallText';

export default function TextArea({
  label,
  placeholder,
  value,
  name,
  onChange,
  errorMessage,
  className,
}) {
  return (
    <div className={[styles.formField, className].join(' ')}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        defaultValue={value}
        className={[styles.field, errorMessage ? styles.invalid : ''].join(' ')}
        placeholder={placeholder}
        onChange={onChange}
      />
      {errorMessage && (
        <SmallText className={styles.error}>{errorMessage}</SmallText>
      )}
    </div>
  );
}
