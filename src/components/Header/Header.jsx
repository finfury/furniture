import React, {useState} from 'react';
import './Header.css'


function Header() {
    const [isActiveMenu, setIsActiveMenu] = useState(false)

    return <header className={'header'}>
        <div className="container">
            <nav className={isActiveMenu ? "header__menu active" : "header__menu"}>
                <div className="header__section">
                    <a href={'#'} className="header__menu_item">Главная</a>
                    <a href={'#'} className="header__menu_item">Каталог</a>
                </div>
                <div className="header__section section-img">
                    <a href={'#'} className="header__menu_item">
                        <img src="../../../img/logo.png" alt="lorem tagline" className="header__menu_logo" />
                    </a>
                </div>
                <div className="header__section">
                    <a href={'#'} className="header__menu_item">О нас</a>
                    <a href={'#'} className="header__menu_item">Контакты</a>
                </div>
            </nav>
            <div className={isActiveMenu ? "header__burger active" : "header__burger"}>
                <img src="../../../img/logo.png" alt="lorem tagline" className="header__burger_logo"></img>
                <div className={"header__burger_icon"} onClick={() => setIsActiveMenu(!isActiveMenu)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    </header>
}

export default Header;