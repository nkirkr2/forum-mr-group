'use client';
import style from './Header.module.scss';
import { useState } from 'react';
import Logo from './Logo';
import BurgerMenu from '../../ui/BurgerMenu/BurgerMenu';
import Sandwich from './Sandwich/Sandwich';

function Header() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <header className={style.header}>
            {/* <div className="container"> */}
                <div className={style.header__row}>
                    <Sandwich
                    onClick={toggleMenu}
                    isOpen={isOpen}
                    />
                    <Logo />
                    <div className={style.header__row_contacts}>
                        <a href='#!'>+7 (495) 085-02-80</a>
                        <a href='#!'>Купить квартиру</a>
                    </div>
                </div>
                <BurgerMenu isOpen={isOpen}/>
            {/* </div> */}
        </header>
    )
}

export default Header;