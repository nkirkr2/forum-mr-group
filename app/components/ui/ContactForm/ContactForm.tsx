import Input from "../Input/Input";
import styles from './ContactForm.module.scss';
import Button from "../Button/Button";

function ContactForm() {
    return (
        <form className={styles.contact_form}>
            <Input
            type="text"
            placeholder="Имя"
            />
            <Input
            type="tel"
            placeholder="Телефон"
            />
            <p className={styles.contact_form__agree}>Нажимая «отправить», вы соглашаетесь на <span>обработку персональных данных.</span></p>
            <Button>Отправить</Button>
        </form>
    )
}

export default ContactForm;