'use client';
import styles from './BurgerMenu.module.scss';
import Sandwich from '../../layout/Header/Sandwich/Sandwich';
import Link from 'next/link';

type BurgerMenuProps = {
  isOpen: boolean
}

function BurgerMenu({isOpen}: BurgerMenuProps) {

    return (
        <>
        <nav className={`${styles.nav} ${isOpen ? styles.nav__open : ''}`}>
          <ul className={styles.nav__list}>
            <li><Link href="/architecture">Архитектура</Link></li>
            <li><Link href="/lobby">Лобби</Link></li>
            <li><Link href="/improvement">Благоустройство</Link></li>
            <li><Link href="/amenities">Amenities</Link></li>
            <li><Link href="/surroundings">Локация и окружение</Link></li>
            <li><Link href="/history">История места</Link></li>
            <li><Link href="/apartments">Квартиры</Link></li>
            <li><Link href="/elector">Выбрать квартиру</Link></li>
            <li><a href="tel:+74950850280">+7 (495) 085-02-80</a></li>
          </ul>
        </nav>
        </>
    )
}

export default BurgerMenu;