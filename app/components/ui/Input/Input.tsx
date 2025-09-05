import styles from './Input.module.scss';

type InputProps = {
  placeholder: string;
  type: string;
  value: string;
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function Input({ placeholder, type, value, name, onChange }: InputProps) {
  return (
    <label className={styles.form_input}>
      <span className="visually-hidden">Введите {placeholder.toLowerCase()}</span>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

export default Input;
