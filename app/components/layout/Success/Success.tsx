import styles from './Success.module.css'

function Success() {
    return (
        <div className={styles.modal} data-modal="success" data-modal-success="application">
            <div className={styles.modal__wrapper}>
                <div className={styles.modal__overlay} data-close-modal=""></div>
                <div className={styles.modal__content}>
                    <div className={styles.application} data-form-validate="" data-callback="base">
                        <button className={styles.application__close_btn} type="button" aria-label="Закрыть попап" data-close-modal="">
                            <svg width="54" height="54" fill="none" xmlns="http://www.w3.org/2000/svg"><path stroke="currentColor" strokeWidth="2" d="m11.598 10.185 32.205 32.206M42.867 10.707 10.662 42.913M1 1h52v52H1z"/></svg>
                        </button>
                        <div className={styles.application__success}>
                            <p className={styles.application__success_text}>Спасибо!</p>
                            <p className={styles.application__success_text}>Мы&nbsp;свяжемся с&nbsp;вами в&nbsp;ближайшее время</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Success;

