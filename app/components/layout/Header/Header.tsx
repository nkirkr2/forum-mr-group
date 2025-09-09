'use client';
import style from './Header.module.scss';
import { useState } from 'react';
import Logo from './Logo';
import Sandwich from './Sandwich/Sandwich';
import dynamic from 'next/dynamic';
const BurgerMenu = dynamic(() => import('../../ui/BurgerMenu/BurgerMenu'), {
  ssr: false,
});

function Header() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <header className={style.header}>
            <div className={style.header__row}>
                <Sandwich
                onClick={toggleMenu}
                isOpen={isOpen}
                />
                <Logo />
                <div className={style.header__row_contacts}>
                    <a href='tel:+74950850280'>+7 (495) 085-02-80</a>
                    <a href='/buy'>Купить квартиру</a>
                </div>
            </div>
            <BurgerMenu isOpen={isOpen}/>
        </header>
    )
}

export default Header;