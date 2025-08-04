import style from './Header.module.scss';
import Logo from './Logo';
import Sandwich from './Sandwich';

function Header() {
    return (
        <header className={style.header}>
            <div className="container">
                <div className={style.header__row}>
                    <Sandwich />
                    <Logo />
                    <div className={style.header__row_contacts}>
                        <a href='#!'>+7 (495) 085-02-80</a>
                        <a href='#!'>Купить квартиру</a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;