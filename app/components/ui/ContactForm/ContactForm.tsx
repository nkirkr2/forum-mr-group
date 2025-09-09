'use client'
import Input from "../Input/Input";
import styles from './ContactForm.module.scss';
import Inputmask from "inputmask";
import Button from "../Button/Button";
import { useState, useRef, useEffect } from "react";

function ContactForm() {

    const inputRef = useRef<HTMLInputElement>(null);
    const [formData, setFormData] = useState({
        name: '',
        phone: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData)
    }

    useEffect(() => {
    if (inputRef.current) {
       const im = new Inputmask('+7 999 999 99 99', { 'placeholder': 'X', 'showMaskOnHover': false });
      im.mask(inputRef.current);
    }
  }, []);


    return (
        <form className={styles.contact_form} onSubmit={handleSubmit}>
            <Input
            type="text"
            name='name'
            placeholder="Имя"
            value={formData.name}
            onChange={handleChange}
            />
            <Input
            ref={inputRef}
            type="tel"
            name='phone'
            placeholder="Телефон"
            value={formData.phone}
            onChange={handleChange}
            />
            <p className={styles.contact_form__agree}>Нажимая «отправить», вы соглашаетесь на <span>обработку персональных данных.</span></p>
            <Button type='submit'>Отправить</Button>
        </form>
    )
}

export default ContactForm;