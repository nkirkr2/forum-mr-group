import styles from './Success.module.css'
import Link from 'next/link';

function Success() {
    return (
        <div className={styles.modal} data-modal="success" data-modal-success="application">
            <div className={styles.modal__wrapper}>
                <div className={styles.modal__overlay} data-close-modal=""></div>
                <div className={styles.modal__content}>
                    <div className={styles.application} data-form-validate="" data-callback="base">
                        <div className={styles.application__success}>
                            <p className={styles.application__success_text}>Спасибо!</p>
                            <p className={styles.application__success_text}>Мы&nbsp;свяжемся с&nbsp;вами в&nbsp;ближайшее время</p>
                        </div>
                        <Link href="/" className={styles.link}>На главную</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Success;

