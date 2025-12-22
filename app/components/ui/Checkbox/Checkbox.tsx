import { ReactNode } from "react";
import styles from './Checkbox.module.css';
import classNames from "classnames";

type CheckboxProps = {
    children: ReactNode
    checked?: boolean
    error?: boolean
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Checkbox({children, checked, error, onChange}: CheckboxProps) {
    return (
        <div className={styles.root}>
                <label className={styles.label}>
                    <input 
                    type="checkbox" 
                    name="checkbox" 
                    className={styles.real} 
                    checked={checked}
                    onChange={onChange}
                    />
                    <span className={classNames(styles.custom, { [styles.error]: error })}></span>
                    <span className={styles.text}>{children}</span>
                </label>
        </div>
    )
}

export default Checkbox;