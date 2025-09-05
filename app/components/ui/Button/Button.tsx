import styles from './Button.module.scss';


type buttonProps = {
    children: string;
    type: string;
}

function Button({children}: buttonProps) {
    return (
        <button className={styles.btn}>
            {children}
        </button>
    );
}

export default Button;