import styles from './Success.module.css'

function Success() {
    return (
        <div className={styles.modal} data-modal="success" data-modal-success="application">
            <div className={styles.modal__wrapper}>
                <div className={styles.modal__overlay} data-close-modal=""></div>
                <div className={styles.modal__content}>
                    <div className={styles.application} data-form-validate="" data-callback="base">
                        <button className={styles.application__close_btn} type="button" aria-label="Закрыть попап" data-close-modal="">
                            <svg width="54" height="54" aria-hidden="true">
                                <use xlinkHref="/i/img/stack.svg?v=7fa69f5e27e50337#icon-close"></use>
                            </svg>
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

