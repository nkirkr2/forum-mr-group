import styles from './Cookies.module.scss';

function Cookies() {
    return (
        <div className={styles.cookie} data-cookies>
            <div className={styles.cookie__content}>
                <p className={styles.cookie__text}>
                Мы&nbsp;используем cookie-файлы, чтобы вам было проще работать с&nbsp;сайтом
                </p>
            </div>
            <div className={styles.cookie__btns}>
                <a href="#" className={styles.cookie__btn} data-cookies-consent>
                ОК
                </a>
            </div>
        </div>
    )
}

export default Cookies;