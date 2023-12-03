import React from "react";
import styles from "./FormField.module.scss";
import SubText from "../regular-text/RegularText";

const FormField = ({ label, placeholder, value, name, type, onChange, errorMessage }) => {
  return (
    <div className={styles.formField}>
      <label className={styles.label} htmlFor={name}>{label}</label>
      <input
        id={name}
        type={type}
        value={value}
        name={name}
        className={styles.field}
        placeholder={placeholder}
        onChange={onChange}
      />
      {errorMessage && <SubText className={styles.error}>{ errorMessage }</SubText>}
    </div>
  );
};

export default FormField;
