'use client';
import styles from './BurgerMenu.module.scss';
import { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type BurgerMenuProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

function BurgerMenu({ isOpen, setIsOpen }: BurgerMenuProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.documentElement.classList.add('no-scroll');
    } else {
      document.documentElement.classList.remove('no-scroll');
    }
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const links = [
    { href: '/#location', label: 'Расположение' },
    { href: '/surroundings', label: 'Окружение' },
    { href: '/architecture', label: 'Архитектура' },
    { href: '/improvement', label: 'Благоустройство' },
    { href: '/lobby', label: 'Лобби' },
    { href: '/amenities', label: 'Amenities' },
    { href: '/apartments', label: 'Отделка' },
    { href: '/history', label: 'История места' },
  ];

  return (
    <nav className={`${styles.nav} ${isOpen ? styles.nav__open : ''}`}>
      <ul className={styles.nav__list}>
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={pathname === href ? styles.active : ''}
              onClick={handleLinkClick} // <-- закрываем меню при клике
            >
              {label}
            </Link>
          </li>
        ))}
        <li style={{ marginTop: '20rem' }}>
          <a href="/chooser/" onClick={handleLinkClick}>
            Выбрать квартиру
          </a>
        </li>
        <li style={{ marginBottom: '20rem' }}>
          <a href="/chooser/favorites/" onClick={handleLinkClick}>
            Избранное
          </a>
        </li>
        <li>
          <a href="tel:+74950850280" onClick={handleLinkClick}>
            +7 (495) 085-02-80
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default BurgerMenu;
