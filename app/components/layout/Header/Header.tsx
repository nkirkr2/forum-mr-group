'use client';
import styles from './Header.module.scss';
import { useState, useRef, useEffect } from 'react';
import Logo from './Logo';
import Sandwich from './Sandwich/Sandwich';
import dynamic from 'next/dynamic';

const BurgerMenu = dynamic(() => import('../../ui/BurgerMenu/BurgerMenu'), {
  ssr: false,
});

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const menuRef = useRef<HTMLDivElement | null>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        let lastScroll = 0;
        const defaultOffset = 200;

        const handleScroll = () => {
        if (isOpen) return;
        const currentScroll =
            window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll > lastScroll && currentScroll > defaultOffset) {
            // скролл вниз
            setIsHidden(true);
        } else if (currentScroll < lastScroll) {
            // скролл вверх
            setIsHidden(false);
        }

        lastScroll = currentScroll;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    

    const toggleMenu = () => {
            setIsOpen(!isOpen);
    }
    
    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
        if (
            isOpen &&
            menuRef.current &&
            !menuRef.current.contains(e.target as Node) &&
            buttonRef.current &&
            !buttonRef.current.contains(e.target as Node)
        ) {
            setIsOpen(false);
        }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen]);

    return (
        <header>
            <div
            className={`${styles.header__row} ${
                isHidden && !isOpen ? styles.header__hidden : ''
            }`}
            >
                <Sandwich
                onClick={toggleMenu}
                isOpen={isOpen}
                ref={buttonRef}
                />
                <Logo />
                <div className={styles.header__row_contacts}>
                    <a href='tel:+74950850280'>+7 (495) 085-02-80</a>
                    <a href='/chooser/' target="_blank" rel="noopener noreferrer">Купить квартиру</a>
                </div>
            </div>
            <div ref={menuRef}>
                <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
        </header>
    )
}

export default Header;