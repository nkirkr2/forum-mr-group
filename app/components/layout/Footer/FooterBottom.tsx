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
                            <Link aria-label="Документы" href="https://xn--80az8a.xn--d1aqf.xn--p1ai/%D1%81%D0%B5%D1%80%D0%B2%D0%B8%D1%81%D1%8B/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3-%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D1%80%D0%BE%D0%B5%D0%BA/%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82/51237" target='_blank' rel="noopener noreferrer">Документы</Link>
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