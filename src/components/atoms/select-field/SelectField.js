import React from "react";
import styles from "@/components/atoms/form-field/FormField.module.scss";
import SmallText from "../small-text/SmallText";

const SelectField = ({
  label,
  name,
  options,
  onChange,
  value,
  errorMessage,
  className,
}) => {
  return (
    <div className={[styles.formField, className].join(" ")}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value || ""}
        onChange={onChange}
        className={[styles.field, errorMessage ? styles.inValid : ""].join(" ")}
      >
        <option value="" disabled>
          Select an option
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {errorMessage && (
        <SmallText className={styles.error}>{errorMessage}</SmallText>
      )}
    </div>
  );
};

export default SelectField;
