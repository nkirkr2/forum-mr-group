import styles from './Footer.module.scss';
import Image from 'next/image';
import Link from 'next/link';

function FooterBottom({...props}) {
    return (
        <div className={styles.footer__bottom} {...props}>
                <div className="container">
                    <div className={styles.footer__bottom_content}>
                        <div className={styles.footer__bottom_content__left}>
                            <p>MR Private</p>
                            <Link aria-label="Документы" href="">Документы</Link>
                            <div className={styles.footer__bottom_logo}>
                                <Image
                                src="/images/icons/footer-dom.svg"
                                alt="Дом РФ"
                                fill
                                style={{ objectFit: "contain" }}
                                />
                            </div>
                        </div>
                        <div className={styles.footer__bottom_content__right}>
                            <p>Любая информация, представленная на сайте, носит информационный характер и не является публичной офертой.</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default FooterBottom;