'use client'
import Input from "../Input/Input";
import styles from './ContactForm.module.scss';
import Inputmask from "inputmask";
import Button from "../Button/Button";
import { useState, useRef, useEffect } from "react";
// import Script from 'next/script';

// declare global {
//   interface Window {
//     Comagic?: {
//       addOfflineRequest: (data: { name: string; phone: string }, callback: (response: any) => void) => void;
//     };
//   }
// }

function ContactForm() {
    const inputRef = useRef<HTMLInputElement>(null);
    const [formData, setFormData] = useState({
        name: '',
        phone: ''
    });

    // const [isComagicReady, setIsComagicReady] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        // if (!isComagicReady || !window.Comagic) {
        //     console.error('Comagic not ready');
        //     // Можно отправить форму обычным способом как fallback
        //     return;
        // }

        // window.Comagic.addOfflineRequest(
        //     {
        //         name: formData.name || '',
        //         phone: formData.phone || ''
        //     },
        //     (response) => {
        //         try {
        //             const result = JSON.parse(response.response);
        //             if (result.success) {
        //                 console.log('Успешно отправлено в Comagic');
        //                 setFormData({ name: '', phone: '' });
        //             } else {
        //                 console.error('Ошибка Comagic:', result);
        //             }
        //         } catch (error) {
        //             console.error('Ошибка парсинга:', error);
        //         }
        //     }
        // );
    }

    useEffect(() => {
        if (inputRef.current) {
            const im = new Inputmask('+7 999 999 99 99', { 'placeholder': 'X', 'showMaskOnHover': false });
            im.mask(inputRef.current);
        }
    }, []);

    // // Функция для проверки готовности Comagic
    // const checkComagicReady = () => {
    //     const checkInterval = setInterval(() => {
    //         if (window.Comagic && typeof window.Comagic.addOfflineRequest === 'function') {
    //             setIsComagicReady(true);
    //             clearInterval(checkInterval);
    //         }
    //     }, 100);
        
    //     // Таймаут на случай если скрипт никогда не загрузится
    //     setTimeout(() => {
    //         clearInterval(checkInterval);
    //     }, 5000);
    // }

    return (
        <>
            {/* <Script 
                src="https://app.uiscom.ru/static/cs.min.js?k=OvKXDWSlorAc7kQq8IE41zoGUxIiZIcm"
                strategy="afterInteractive"
                onLoad={checkComagicReady}
                onError={() => console.error('Failed to load Comagic script')}
            /> */}
            
            <form className={styles.contact_form} onSubmit={handleSubmit}>
                <Input
                    type="text"
                    name='name'
                    placeholder="Имя"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <Input
                    ref={inputRef}
                    type="tel"
                    name='phone'
                    placeholder="Телефон"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
                <p className={styles.contact_form__agree}>
                    Нажимая «отправить», вы соглашаетесь на <span>обработку персональных данных.</span>
                </p>
                <Button type='submit'>Отправить</Button>
                {/* <Button type='submit' disabled={!isComagicReady}>
                    {isComagicReady ? 'Отправить' : 'Загрузка...'}
                </Button> */}
            </form>
        </>
    )
}

export default ContactForm;