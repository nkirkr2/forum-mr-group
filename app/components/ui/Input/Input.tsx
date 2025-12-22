import React, { forwardRef } from "react";
import styles from "./Input.module.scss";
import classNames from 'classnames';

type InputProps = {
  placeholder: string;
  type: string;
  value?: string; 
  name: string;
  error?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "name" | "value" | "onChange" | "placeholder">;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, type, value, name, error, onChange, onBlur, ...rest }, ref) => {
    return (
      <label className={classNames(styles.form_input, { [styles.error]: error })}>
        <span className="visually-hidden">
          Введите {placeholder?.toLowerCase?.()}
        </span>
        <input
          className={styles.input}
          ref={ref}
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          {...rest}
        />
      </label>
    );
  }
);

Input.displayName = "Input";
export default Input;
