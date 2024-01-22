import React from 'react';
import styles from './FormField.module.scss';
import SmallText from '../small-text/SmallText';

export default function FormField({
  label,
  placeholder,
  value,
  name,
  type,
  min,
  onChange,
  errorMessage,
  className,
  step,
  disabled,
  multiple = false,
}) {
  return (
    <div className={[styles.formField, className].join(' ')}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        type={type}
        defaultValue={value}
        name={name}
        data-testid="event_image"
        {...(step && { step: step })}
        min={min}
        className={[styles.field, errorMessage ? styles.inValid : ''].join(' ')}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
        multiple={multiple}
      />
      {errorMessage && (
        <SmallText className={styles.error}>{errorMessage}</SmallText>
      )}
    </div>
  );
}
