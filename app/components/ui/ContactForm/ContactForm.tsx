'use client'
import Input from "../Input/Input";
import styles from './ContactForm.module.scss';
import Inputmask from "inputmask";
import Button from "../Button/Button";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

function ContactForm() {
    const router = useRouter();
    const inputRef = useRef<HTMLInputElement>(null);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [nameError, setNameError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);
    const [nameDirty, setNameDirty] = useState(false);
    const [phoneDirty, setPhoneDirty] = useState(false);
   

    const blurHandler = (evt: React.FocusEvent<HTMLInputElement>) => {
        switch (evt.target.name) {
            case 'name':
                setNameDirty(true);
                break;
            case 'phone':
                setPhoneDirty(true);
                break;
        }
    };

    const nameHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const value = evt.target.value;
        setName(value);

        const hasNumbers = /\d/.test(value);
        setNameError(value.trim().length < 2 || hasNumbers);
    };


    const phoneHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const value = evt.target.value;
        setPhone(value);
        const re = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
        setPhoneError(!re.test(value));
    };

   
 
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (nameError || phoneError || !name || !phone) {
            return;
        }

        const data = { name, phone };

        if (typeof window !== 'undefined' && window.Comagic?.addOfflineRequest) {
            window.Comagic.addOfflineRequest(
                data,
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                (o: any) => {
                    const response = JSON.parse(o.response);
                    if (response.success) {
                        router.push('/success');
                    } else {
                    }
                }
            );
        } else {
          
        }
    };


    useEffect(() => {
        if (inputRef.current) {
            const im = new Inputmask('+7 999 999 99 99', { 'placeholder': 'X', 'showMaskOnHover': false });
            im.mask(inputRef.current);
        }
    }, []);


    return (
        <>
            
            <form className={styles.contact_form} onSubmit={handleSubmit}>
                <Input
                type="text"
                name="name"
                placeholder="Имя"
                value={name}
                onChange={nameHandler}
                onBlur={evt => blurHandler(evt)} 
                className={`${nameError && nameDirty ? styles.inputError : ''}`}
                />

                <Input
                ref={inputRef}
                type="tel"
                name="phone"
                placeholder="Телефон"
                value={phone}
                onChange={phoneHandler}
                onBlur={evt => blurHandler(evt)} 
                className={`${phoneError && phoneDirty ? styles.inputError : ''}`}
                />
                <p className={styles.contact_form__agree}>
                    Нажимая «отправить», вы соглашаетесь на <Link href="https://www.mr-group.ru/personal-data/" target="_blank" rel="noopener noreferrer">обработку персональных данных.</Link>
                </p>
                <Button type='submit'>Отправить</Button>
    
            </form>
        </>
    )
}

export default ContactForm;