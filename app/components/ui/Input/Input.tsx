// Input.tsx
import React, { forwardRef } from "react";
import styles from "./Input.module.scss";

type InputProps = {
  placeholder: string;
  type: string;
  value?: string; 
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "name" | "value" | "onChange" | "placeholder">;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, type, value, name, onChange, ...rest }, ref) => {
    return (
      <label className={styles.form_input}>
        <span className="visually-hidden">
          Введите {placeholder?.toLowerCase?.()}
        </span>
        <input
          ref={ref}
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          {...rest}
        />
      </label>
    );
  }
);

Input.displayName = "Input";
export default Input;
