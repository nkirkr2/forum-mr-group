'use client'
import Input from "../Input/Input";
import styles from './ContactForm.module.scss';
import Inputmask from "inputmask";
import Button from "../Button/Button";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Checkbox from '../Checkbox/Checkbox';

function ContactForm() {
    const router = useRouter();
    const inputRef = useRef<HTMLInputElement>(null);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [agreement, setAgreement] = useState(false);
    const [marketingConsent, setMarketingConsent] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [agreementError, setAgreementError] = useState(false);
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

    const agreementHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setAgreement(evt.target.checked);
        setAgreementError(false);
    };

    const marketingHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setMarketingConsent(evt.target.checked);
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

        const digits = value.replace(/\D/g, '');
        setPhoneError(digits.length !== 11);
    };

   
 
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        setNameDirty(true);
        setPhoneDirty(true);

        // Проверяем имя
        const hasNumbers = /\d/.test(name);
        const isNameInvalid = name.trim().length < 2 || hasNumbers;
        setNameError(isNameInvalid);

        // Проверяем телефон
        const digits = phone.replace(/\D/g, '');
        const isPhoneInvalid = digits.length !== 11;
        setPhoneError(isPhoneInvalid);

        if (!agreement) {
            setAgreementError(true);
        }

        if (isNameInvalid || isPhoneInvalid || !name || !phone || !agreement) {
            return;
        }

        setIsSubmitting(true);

        // Формируем данные для отправки
        const fullComment = apartmentString 
            ? `${apartmentString}${comment ? `. ${comment}` : ''}`
            : comment;

        const data: Record<string, string> = {
            name,
            phone,
            message: fullComment,
        };

        // Маркетинговые рассылки (как отдельное поле)
        data.marketing_consent = marketingConsent ? '1' : '0';

        // Добавляем данные о квартире как отдельные поля
        if (apartmentInfo) {
            data.apartment_number = apartmentInfo.number;
            data.apartment_floor = String(apartmentInfo.floor);
            data.apartment_area = String(apartmentInfo.area);
            data.apartment_price = String(apartmentInfo.amount);
        }

        // Отправка через Comagic
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
            setIsSubmitting(false);
        };
    };

    useEffect(() => {
        if (inputRef.current) {
            const im = new Inputmask('+7 999 999 99 99', {
                placeholder: 'X',
                showMaskOnHover: false
            });
            im.mask(inputRef.current);
        }
    }, []);


    return (
        <>
            
            <form className={styles.contact_form} onSubmit={handleSubmit}>
                <Input 
                    type='text' 
                    placeholder="Имя"
                    name="name"
                    value={name}
                    onChange={nameHandler}
                    onBlur={() => setNameDirty(true)}
                    label="Имя"
                    error={nameDirty && nameError}
                />

                <Input 
                    type='tel' 
                    ref={inputRef}
                    placeholder="+7 ХХХ ХХХ ХХ ХХ"
                    name="phone"
                    value={phone}
                    onChange={phoneHandler}
                    onBlur={() => setPhoneDirty(true)}
                    label="Телефон"
                    error={phoneDirty && phoneError}
                />
                <div className=""> 
                <Checkbox checked={agreement} onChange={agreementHandler} error={agreementError}>
                    Соглашаюсь на <Link href="https://www.mr-group.ru/personal-data/" target="_blank" rel="noopener noreferrer">обработку персональных данных</Link>
                </Checkbox>

                <Checkbox
                    checked={marketingConsent}
                    onChange={marketingHandler}
                >
                    Подписаться на <Link href="#!Link">маркетинговые и&nbsp;рекламные рассылки</Link>
                </Checkbox>
                </div>
                <Button 
                    type='submit'>
                        {isSubmitting ? 'Отправка...' : 'Отправить'}
                </Button>
    
            </form>
        </>
    )
}

export default ContactForm;