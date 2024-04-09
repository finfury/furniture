import React from 'react';
import './ContactsPage.css'
import GreenButton from '../../components/GreenButton/GreenButton.jsx'
import Input from '../../components/Input/Input.jsx'
import Textarea from '../../components/Textarea/Textarea.jsx'
import {mapURL} from '../../static/static.js'


function ContactsPage() {
    return <React.Fragment>
        <div className={'contacts header-padding-top'}>
            <div className="contacts__map">
                <iframe className="contacts__map_iframe"
                        src={mapURL}></iframe>
            </div>
            <div className="contacts__feedback">
                <form name="feedback" className="contacts__feedback_form feedback-form">
                    <h3 className="feedback-form__title"><span>Связаться с нами</span></h3>
                    <p className="feedback-form__text">Заполните, пожалуйста, форму ниже, и мы сможем проконсультировать вас более детально</p>
                    <p className="feedback-form__text feedback-form__info">+7(800)5553535 Нижний Новгород, Нижегородская обл., 603093 ул. Родионова, 136</p>
                    <a href="mailto: ouremailaddress@email.com" className="footer__connect_email feedback-form__email">
                        <svg viewBox="0 0 16 12" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M14.5 0H1.5C0.65625 0 0 0.6875 0 1.5V10.5C0 11.3438 0.65625 12 1.5 12H14.5C15.3125 12 16 11.3438 16 10.5V1.5C16 0.6875 15.3125 0 14.5 0ZM14.5 1.5V2.78125C13.7812 3.375 12.6562 4.25 10.2812 6.125C9.75 6.53125 8.71875 7.53125 8 7.5C7.25 7.53125 6.21875 6.53125 5.6875 6.125C3.3125 4.25 2.1875 3.375 1.5 2.78125V1.5H14.5ZM1.5 10.5V4.71875C2.1875 5.28125 3.21875 6.09375 4.75 7.3125C5.4375 7.84375 6.65625 9.03125 8 9C9.3125 9.03125 10.5 7.84375 11.2188 7.3125C12.75 6.09375 13.7812 5.28125 14.5 4.71875V10.5H1.5Z" />
                        </svg>
                        <span>ouremailaddress@email.com</span>
                    </a>
                    <div className="feedback-form__entries">
                        <div className="feedback-form__user">
                            <Input placeholder="Ваше имя"/>
                            <Input placeholder="Номер телефона"/>
                            <Input type="email" placeholder="Адрес электронной почты"/>
                        </div>
                        <div className="feedback-form__message">
                            <Textarea placeholder="Ваше сообщение"/>
                        </div>
                        <div className="feedback-form__send">
                            <GreenButton>Отправить</GreenButton>
                        </div>
                    </div>
                </form>
            </div>
            <div className="footer__copyright">
                <p className="footer__copyright_text">@ Copyright 2024</p>
            </div>
        </div>
    </React.Fragment>
}

export default ContactsPage;