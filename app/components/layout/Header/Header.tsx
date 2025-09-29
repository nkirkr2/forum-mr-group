'use client';
import styles from './Header.module.scss';
import { useState, useRef, useEffect } from 'react';
import Logo from './Logo';
import Sandwich from './Sandwich/Sandwich';
import dynamic from 'next/dynamic';
import classNames from 'classnames';
import GlassButton from '../../ui/GlassBtn/GlassBtn';

const BurgerMenu = dynamic(() => import('../../ui/BurgerMenu/BurgerMenu'), {
  ssr: false,
});

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const menuRef = useRef<HTMLDivElement | null>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);

  const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    
    useEffect(() => {
      const feImage = document.querySelector("feImage");
      if (feImage) {
        fetch("/map.png")
          .then((res) => res.blob())
          .then((blob) => {
            const url = URL.createObjectURL(blob);
            feImage.setAttribute("href", url);
          });
      }
    }, []);

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
            className={`${styles.header__row} ${isHidden ? styles.header__hidden : ''}`} 
            >
                <Sandwich
                onClick={toggleMenu}
                isOpen={isOpen}
                ref={buttonRef}
                />
                <Logo />
                <div className={styles.header__row_contacts}>
                    <a href='tel:+74950850280'>+7 (495) 085-02-80</a>
                    <a href='/buy'>Купить квартиру</a>
                </div>
            </div>
            <div ref={menuRef}>
                <BurgerMenu isOpen={isOpen}/>
            </div>
        </header>
    )
}

export default Header;