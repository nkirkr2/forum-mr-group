'use client';
import { useState } from 'react';
import styles from './BurgerMenu.module.scss';
import Sandwich from '../../layout/Header/Sandwich';
import { APP_ROUTES } from '@/app/consts';
import Link from 'next/link';

function BurgerMenu() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
        <Sandwich onClick={toggleMenu}/>
        <nav className={`${styles.nav} ${isOpen ? styles.nav__open : ''}`}>
          <ul className={styles.nav__list}>
            <li><Link href="/history">История места</Link></li>
            <li><Link href="/location">Расположение</Link></li>
            <li><Link href="/lobby">Лобби</Link></li>
            <li><Link href="/landscaping">Благоустройство</Link></li>
            <li><Link href="/amenities">Amenities</Link></li>
            <li><Link href="/district">Локация и окружение</Link></li>
            <li><Link href="/gallery">Галерея</Link></li>
            <li><Link href="/apartments">Квартиры</Link></li>
            <li><Link href="/selector">Выбрать квартиру</Link></li>
            <li><Link href="/progress">Ход строительства</Link></li>
            <li><Link href="/contacts">Контакты</Link></li>
            <li><a href="tel:+74950850280">+7 (495) 085-02-80</a></li>
            <li><Link href="/buy">Купить квартиру</Link></li>
          </ul>
        </nav>
        </>
    )
}

export default BurgerMenu;