import styles from './Footer.module.scss';
import TextLogo from '../../ui/TextLogo';
import Button from '../../ui/Button/Button';
import ContactForm from '../../ui/ContactForm/ContactForm';
import Image from 'next/image';
import Link from 'next/link';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footer__logo}>
                    <TextLogo />
                </div>
                <div className={styles.footer__content}>
                    <div className={styles.footer__content_left}>
                        <p className="paragraph">ОФИС ПРОДАЖ MR PRIVATE <br /> Cадовая-Cухаревcкая, 14</p>
                        <p className="paragraph">Запишитесь на просмотр. Укажите свои контактЫ, <br /> и менеджер свяжется с вами.</p>
                        <div className={styles.footer__content_left__buttons}>
                            <Button>whatsapp</Button>
                            <Button>Telegram</Button>
                        </div>
                    </div>
                    <div className={styles.footer__content_right}>
                        <ContactForm />
                    </div>
                </div>
            </div>
            <div className={styles.footer__bottom}>
                <div className="container">
                    <div className={styles.footer__bottom_content}>
                        <div className={styles.footer__bottom_content__left}>
                            <p>MR Private</p>
                            <Link href="">Документы</Link>
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
        </footer>
    )
}

export default Footer;