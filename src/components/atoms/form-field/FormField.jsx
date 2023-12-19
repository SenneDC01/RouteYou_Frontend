import React from 'react';
import styles from './FormField.module.scss';
import SmallText from '../small-text/SmallText';

const FormField = ({
  label,
  placeholder,
  value,
  name,
  type,
  onChange,
  errorMessage,
  className,
}) => {
  return (
    <div className={[styles.formField, className].join(' ')}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        type={type}
        value={value}
        name={name}
        className={[styles.field, errorMessage ? styles.inValid : ''].join(' ')}
        placeholder={placeholder}
        onChange={onChange}
      />
      {errorMessage && (
        <SmallText className={styles.error}>{errorMessage}</SmallText>
      )}
    </div>
  );
};

export default FormField;
