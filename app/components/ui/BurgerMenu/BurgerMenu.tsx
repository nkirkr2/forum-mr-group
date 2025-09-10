'use client';
import styles from './BurgerMenu.module.scss';
import { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type BurgerMenuProps = {
  isOpen: boolean
}

function BurgerMenu({ isOpen }: BurgerMenuProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.documentElement.classList.add('no-scroll');
    } else {
      document.documentElement.classList.remove('no-scroll');
    }
  }, [isOpen]);

  const links = [
    { href: "/architecture", label: "Архитектура" },
    { href: "/lobby", label: "Лобби" },
    { href: "/improvement", label: "Благоустройство" },
    { href: "/amenities", label: "Amenities" },
    { href: "/surroundings", label: "Локация и окружение" },
    { href: "/history", label: "История места" },
    { href: "/apartments", label: "Квартиры" },
    { href: "/elector", label: "Выбрать квартиру" },
  ];

  return (
    <nav className={`${styles.nav} ${isOpen ? styles.nav__open : ''}`}>
      <ul className={styles.nav__list}>
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={pathname === href ? styles.active : ""}
            >
              {label}
            </Link>
          </li>
        ))}
        <li><a href="tel:+74950850280">+7 (495) 085-02-80</a></li>
      </ul>
    </nav>
  )
}

export default BurgerMenu;
