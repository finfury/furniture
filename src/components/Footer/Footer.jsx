import React from 'react';
import './Footer.css'


function Footer() {
    return <footer className={'footer'}>
        <div className="container">
            <div className="footer__body">
                <div className="footer__connect">
                    <h6 className="footer__connect_title">Связаться с нами</h6>
                    <p className="footer__connect_text">Введите свой email, чтобы мы могли проконсультировать вас</p>
                    <a href="mailto:#" className="footer__connect_email">
                        <svg viewBox="0 0 16 12" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M14.5 0H1.5C0.65625 0 0 0.6875 0 1.5V10.5C0 11.3438 0.65625 12 1.5 12H14.5C15.3125 12 16 11.3438 16 10.5V1.5C16 0.6875 15.3125 0 14.5 0ZM14.5 1.5V2.78125C13.7812 3.375 12.6562 4.25 10.2812 6.125C9.75 6.53125 8.71875 7.53125 8 7.5C7.25 7.53125 6.21875 6.53125 5.6875 6.125C3.3125 4.25 2.1875 3.375 1.5 2.78125V1.5H14.5ZM1.5 10.5V4.71875C2.1875 5.28125 3.21875 6.09375 4.75 7.3125C5.4375 7.84375 6.65625 9.03125 8 9C9.3125 9.03125 10.5 7.84375 11.2188 7.3125C12.75 6.09375 13.7812 5.28125 14.5 4.71875V10.5H1.5Z" />
                        </svg>
                        <span>ouremailaddress@email.com</span>
                    </a>
                    <form name={'feedback'} className="footer__form">
                        <input type="text" className="footer__form_input"
                               placeholder={'Введите свою почту'} />
                        <button className="footer__form_button">Отправить</button>
                    </form>
                </div>
                <ul className="footer__network footer-links">
                    <li className="footer-links__item">
                        <a href="" className="footer-links__link">
                            <svg className={'footer-links__item_svg'} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M15.75 8C15.75 11.875 12.9062 15.0938 9.1875 15.6562V10.25H11L11.3438 8H9.1875V6.5625C9.1875 5.9375 9.5 5.34375 10.4688 5.34375H11.4375V3.4375C11.4375 3.4375 10.5625 3.28125 9.6875 3.28125C7.9375 3.28125 6.78125 4.375 6.78125 6.3125V8H4.8125V10.25H6.78125V15.6562C3.0625 15.0938 0.25 11.875 0.25 8C0.25 3.71875 3.71875 0.25 8 0.25C12.2812 0.25 15.75 3.71875 15.75 8Z" />
                            </svg>
                            <span className="footer-links__item_text">Facebook</span>
                        </a>
                    </li>
                    <li className="footer-links__item">
                        <a href="" className="footer-links__link">
                            <svg className={'footer-links__item_svg'} viewBox="0 0 14 15" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 3.40625C8.96875 3.40625 10.5938 5.03125 10.5938 7C10.5938 9 8.96875 10.5938 7 10.5938C5 10.5938 3.40625 9 3.40625 7C3.40625 5.03125 5 3.40625 7 3.40625ZM7 9.34375C8.28125 9.34375 9.3125 8.3125 9.3125 7C9.3125 5.71875 8.28125 4.6875 7 4.6875C5.6875 4.6875 4.65625 5.71875 4.65625 7C4.65625 8.3125 5.71875 9.34375 7 9.34375ZM11.5625 3.28125C11.5625 3.75 11.1875 4.125 10.7188 4.125C10.25 4.125 9.875 3.75 9.875 3.28125C9.875 2.8125 10.25 2.4375 10.7188 2.4375C11.1875 2.4375 11.5625 2.8125 11.5625 3.28125ZM13.9375 4.125C14 5.28125 14 8.75 13.9375 9.90625C13.875 11.0312 13.625 12 12.8125 12.8438C12 13.6562 11 13.9062 9.875 13.9688C8.71875 14.0312 5.25 14.0312 4.09375 13.9688C2.96875 13.9062 2 13.6562 1.15625 12.8438C0.34375 12 0.09375 11.0312 0.03125 9.90625C-0.03125 8.75 -0.03125 5.28125 0.03125 4.125C0.09375 3 0.34375 2 1.15625 1.1875C2 0.375 2.96875 0.125 4.09375 0.0625C5.25 0 8.71875 0 9.875 0.0625C11 0.125 12 0.375 12.8125 1.1875C13.625 2 13.875 3 13.9375 4.125ZM12.4375 11.125C12.8125 10.2188 12.7188 8.03125 12.7188 7C12.7188 6 12.8125 3.8125 12.4375 2.875C12.1875 2.28125 11.7188 1.78125 11.125 1.5625C10.1875 1.1875 8 1.28125 7 1.28125C5.96875 1.28125 3.78125 1.1875 2.875 1.5625C2.25 1.8125 1.78125 2.28125 1.53125 2.875C1.15625 3.8125 1.25 6 1.25 7C1.25 8.03125 1.15625 10.2188 1.53125 11.125C1.78125 11.75 2.25 12.2188 2.875 12.4688C3.78125 12.8438 5.96875 12.75 7 12.75C8 12.75 10.1875 12.8438 11.125 12.4688C11.7188 12.2188 12.2188 11.75 12.4375 11.125Z" />
                            </svg>
                            <p className="footer-links__item_text">Instagram</p>
                        </a>
                    </li>
                    <li className="footer-links__item">
                        <a href="" className="footer-links__link">
                            <svg className={'footer-links__item_svg'} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M15.5 8C15.5 12.2812 12.0312 15.75 7.75 15.75C6.9375 15.75 6.15625 15.6562 5.4375 15.4062C5.75 14.9062 6.21875 14.0625 6.40625 13.375C6.5 13.0312 6.875 11.5312 6.875 11.5312C7.125 12.0312 7.875 12.4375 8.65625 12.4375C11 12.4375 12.6875 10.2812 12.6875 7.625C12.6875 5.0625 10.5938 3.125 7.90625 3.125C4.5625 3.125 2.78125 5.375 2.78125 7.8125C2.78125 8.96875 3.375 10.375 4.34375 10.8438C4.5 10.9062 4.59375 10.875 4.625 10.7188C4.625 10.625 4.78125 10.0938 4.84375 9.84375C4.84375 9.78125 4.84375 9.6875 4.78125 9.625C4.46875 9.25 4.21875 8.53125 4.21875 7.84375C4.21875 6.15625 5.5 4.5 7.71875 4.5C9.59375 4.5 10.9375 5.78125 10.9375 7.65625C10.9375 9.75 9.875 11.1875 8.5 11.1875C7.75 11.1875 7.1875 10.5625 7.34375 9.8125C7.5625 8.875 8 7.875 8 7.21875C8 6.625 7.6875 6.125 7.03125 6.125C6.25 6.125 5.625 6.9375 5.625 8C5.625 8.6875 5.84375 9.15625 5.84375 9.15625C5.84375 9.15625 5.09375 12.4062 4.9375 13C4.78125 13.6875 4.84375 14.625 4.90625 15.2188C2.03125 14.0938 0 11.3125 0 8C0 3.71875 3.46875 0.25 7.75 0.25C12.0312 0.25 15.5 3.71875 15.5 8Z" />
                            </svg>
                            <p className="footer-links__item_text">Pinterest</p>
                        </a>
                    </li>
                    <li className="footer-links__item">
                        <a href="" className="footer-links__link">
                            <svg className={'footer-links__item_svg'} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M11.875 2.0625C13.1875 3.375 14 5.09375 14 6.96875C14 10.7812 10.8125 13.9062 6.96875 13.9062C5.8125 13.9062 4.6875 13.5938 3.65625 13.0625L0 14L0.96875 10.4062C0.375 9.375 0.03125 8.1875 0.03125 6.9375C0.03125 3.125 3.15625 0 6.96875 0C8.84375 0 10.5938 0.75 11.875 2.0625ZM6.96875 12.7188C10.1562 12.7188 12.8125 10.125 12.8125 6.96875C12.8125 5.40625 12.1562 3.96875 11.0625 2.875C9.96875 1.78125 8.53125 1.1875 7 1.1875C3.8125 1.1875 1.21875 3.78125 1.21875 6.9375C1.21875 8.03125 1.53125 9.09375 2.09375 10.0312L2.25 10.25L1.65625 12.375L3.84375 11.7812L4.03125 11.9062C4.9375 12.4375 5.9375 12.7188 6.96875 12.7188ZM10.1562 8.40625C10.3125 8.5 10.4375 8.53125 10.4688 8.625C10.5312 8.6875 10.5312 9.03125 10.375 9.4375C10.2188 9.84375 9.53125 10.2188 9.21875 10.25C8.65625 10.3438 8.21875 10.3125 7.125 9.8125C5.375 9.0625 4.25 7.3125 4.15625 7.21875C4.0625 7.09375 3.46875 6.28125 3.46875 5.40625C3.46875 4.5625 3.90625 4.15625 4.0625 3.96875C4.21875 3.78125 4.40625 3.75 4.53125 3.75C4.625 3.75 4.75 3.75 4.84375 3.75C4.96875 3.75 5.09375 3.71875 5.25 4.0625C5.375 4.40625 5.75 5.25 5.78125 5.34375C5.8125 5.4375 5.84375 5.53125 5.78125 5.65625C5.46875 6.3125 5.09375 6.28125 5.28125 6.59375C5.96875 7.75 6.625 8.15625 7.65625 8.65625C7.8125 8.75 7.90625 8.71875 8.03125 8.625C8.125 8.5 8.46875 8.09375 8.5625 7.9375C8.6875 7.75 8.8125 7.78125 8.96875 7.84375C9.125 7.90625 9.96875 8.3125 10.1562 8.40625Z" />
                            </svg>
                            <p className="footer-links__item_text">WhatsApp</p>
                        </a>
                    </li>
                    <li className="footer-links__item">
                        <a href="" className="footer-links__link">
                            <svg className={'footer-links__item_svg'} viewBox="0 0 18 12" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M17.1562 1.90625C17.5312 3.21875 17.5312 6.03125 17.5312 6.03125C17.5312 6.03125 17.5312 8.8125 17.1562 10.1562C16.9688 10.9062 16.375 11.4688 15.6562 11.6562C14.3125 12 9 12 9 12C9 12 3.65625 12 2.3125 11.6562C1.59375 11.4688 1 10.9062 0.8125 10.1562C0.4375 8.8125 0.4375 6.03125 0.4375 6.03125C0.4375 6.03125 0.4375 3.21875 0.8125 1.90625C1 1.15625 1.59375 0.5625 2.3125 0.375C3.65625 0 9 0 9 0C9 0 14.3125 0 15.6562 0.375C16.375 0.5625 16.9688 1.15625 17.1562 1.90625ZM7.25 8.5625L11.6875 6.03125L7.25 3.5V8.5625Z" />
                            </svg>
                            <p className="footer-links__item_text">Youtube</p>
                        </a>
                    </li>
                </ul>
                <ul className="footer__help footer-navigation">
                    <li className="footer-navigation__item">
                        <a href="#" className="footer-navigation__item_link">Доставка</a>
                    </li>
                    <li className="footer-navigation__item">
                        <a href="#" className="footer-navigation__item_link">FAQ</a>
                    </li>
                    <li className="footer-navigation__item">
                        <a href="#" className="footer-navigation__item_link">Помощь</a>
                    </li>
                    <li className="footer-navigation__item">
                        <a href="#" className="footer-navigation__item_link">Больше о нас</a>
                    </li>
                </ul>
            </div>
        </div>
        <div className="footer__copyright">
            <p className="footer__copyright_text">@ Copyright 2024</p>
        </div>
    </footer>
}

export default Footer;