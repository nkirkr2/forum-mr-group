import styles from './Success.module.css'
import Image from 'next/image';

function Success() {
    return (
        <div className={styles.modal} data-modal="success" data-modal-success="application">
            <div className={styles.modal__wrapper}>
                <div className={styles.modal__overlay} data-close-modal=""></div>
                <div className={styles.modal__content}>
                    <div className={styles.application} data-form-validate="" data-callback="base">
                        <button className={styles.application__close_btn} type="button" aria-label="Закрыть попап" data-close-modal="">
                            <div className={styles.closeIcon}>
                                <Image
                                    src="/images/icons/close.svg"
                                    alt="Закрыть"
                                    fill
                                    style={{ objectFit: "cover" }}
                                />
                            </div>
                        </button>
                        <div className={styles.application__success}>
                            <p className={styles.application__success_text}><span className='accent'>Спасибо!</span></p>
                            <p className={styles.application__success_text}>Мы&nbsp;свяжемся с&nbsp;вами в&nbsp;ближайшее время</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Success;

