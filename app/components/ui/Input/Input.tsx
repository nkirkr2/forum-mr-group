import styles from './Input.module.scss';

type inputProps = {
    placeholder: string;
    type: 'text' | 'tel'; 
}

function Input({placeholder, type}: inputProps) {
    return (
        <label className={styles.form_input}>
            <span className="visually-hidden">Введите {placeholder.toLowerCase()}</span>
            <input type={type} placeholder={placeholder} />
        </label>
    )
}

export default Input;