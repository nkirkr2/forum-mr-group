import styles from './Footer.module.scss';
import TextLogo from '../../ui/TextLogo';
import ContactForm from '../../ui/ContactForm/ContactForm';
import FooterBottom from './FooterBottom';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footer__logo}>
                    <TextLogo />
                </div>
                <div className={styles.footer__content}>
                    <div className={styles.footer__content_left}>
                        <address className="paragraph">ОФИС ПРОДАЖ MR PRIVATE <br /> Cадовая-Cухаревcкая, 14</address>
                        <p className="paragraph">Запишитесь на просмотр. Укажите свои контактЫ, <br /> и менеджер свяжется с вами.</p>
                        {/* <div className={styles.footer__content_left__buttons}>
                            <a href="https://wa.me/74955141514" target="_blank" rel="noopener noreferrer">
                                <Button>WhatsApp</Button>
                            </a>
                            <a href="https://t.me/mrprivatearka" target="_blank" rel="noopener noreferrer">
                                <Button>Telegram</Button>
                            </a>
                        </div> */}
                    </div>
                    <div className={styles.footer__content_right}>
                        <ContactForm />
                    </div>
                </div>
            </div>
            <FooterBottom />
        </footer>
    )
}

export default Footer;