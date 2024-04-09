import React, {useState} from 'react';
import './Header.css'
import {NavLink} from 'react-router-dom'
import {bodyLock} from '../../helpers/lock.js'


function Header() {
    const [isActiveMenu, setIsActiveMenu] = useState(false)

    const clickBurgerHandler = () => {
        setIsActiveMenu(!isActiveMenu)
        bodyLock(!isActiveMenu)
    }

    return <header className={'header'}>
        <div className="container">
            <nav className={isActiveMenu ? "header__menu active" : "header__menu"}>
                <div className="header__section">
                    <NavLink to={'/main'} className="header__menu_item">Главная</NavLink>
                    <NavLink to={'/gallery'} className="header__menu_item">Каталог</NavLink>
                </div>
                <div className="header__section section-img">
                    <NavLink to={'/main'} className="header__menu_item img">
                        <img src="../../../img/logo.png" alt="lorem tagline" className="header__menu_logo" />
                    </NavLink>
                </div>
                <div className="header__section">
                    <NavLink to={'/about'} className="header__menu_item">О нас</NavLink>
                    <NavLink to={'/contacts'} className="header__menu_item">Контакты</NavLink>
                </div>
            </nav>
            <div className={isActiveMenu ? "header__burger active" : "header__burger"}>
                <img src="../../../img/logo.png" alt="lorem tagline" className="header__burger_logo"></img>
                <div className={"header__burger_icon"} onClick={() => clickBurgerHandler()}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    </header>
}

export default Header;