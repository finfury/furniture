import React, {useState} from 'react'
import {Rating} from '@mui/material'
import Slider from 'react-slick'
import './GoodModal.css'


const SlickButtonFix = ({currentSlide, slideCount, children, ...props}) => (
    <div className="slider-arrow" {...props}>
        {children}
    </div>
);

function GoodModal({setActiveModal}) {
    const [value, setValue] = useState(4);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
        ],
        prevArrow: <SlickButtonFix>
            <img className="slider-arrow_icon prev" src="../../../img/arrow-left.png" alt="previosly" />
        </SlickButtonFix>,
        nextArrow: <SlickButtonFix>
            <img className="slider-arrow_icon next" src="../../../img/arrow-right.png" alt="next" />
        </SlickButtonFix>,
    }

    return <div className={'good'}>
        <img onClick={() => setActiveModal(false)} src="../../../img/close.png" alt="close" className="modal-close_img" />
        <div className="good__slider">
            <Slider {...settings}>
                <div className="good-slide">
                    <img className="good-slide_img" src="../../../img/good-1.jpg" alt="" />
                </div>
                <div className="good-slide">
                    <img className="good-slide_img" src="../../../img/good-1.jpg" alt="" />
                </div>
                <div className="good-slide">
                    <img className="good-slide_img" src="../../../img/good-1.jpg" alt="" />
                </div>
                <div className="good-slide">
                    <img className="good-slide_img" src="../../../img/good-1.jpg" alt="" />
                </div>
                <div className="good-slide">
                    <img className="good-slide_img" src="../../../img/good-1.jpg" alt="" />
                </div>
            </Slider>
        </div>
        <div className="good__main">
            <div className="good__label">
                <h3 className="good__label_title">Барный стул "Комета"</h3>
                <p className="good__label_price">47000 руб</p>
            </div>
            <div className="good__feedback">
                <div className="good__feedback_rating">
                    <Rating name="simple-controlled" value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }} />
                    <span className="good__feedback_rating-value">({value})</span>
                </div>
                <button className="good__feedback_button footer__form_button">Оставить отзыв</button>
            </div>
        </div>
        <div className="good__info">
            <div className="good__info_card good__size">
                <h6 className="good__info_title">Дополнительно</h6>
                <p className="good__info_par">Артикул: 15106</p>
                <p className="good__info_par">Стиль: Современный</p>
                <p className="good__info_par">Цвет: Орех</p>
                <p className="good__info_par">Указана начальная цена за стандартную компоновку 75х30х53.</p>
                <p className="good__info_par">В стоимость не входит доставка и монтаж.</p>
            </div>
            <div className="good__info_card">
                <h6 className="good__info_title">Описание:</h6>
                <p className="good__info_par">Верхняя часть стула реализована в форме икосаэдра, что придает ему уникальный внешний вид.</p>
                <p className="good__info_par">Стильный дизайн стула позволит ему идеально вписаться в любой современный интерьер.</p>
                <p className="good__info_par">Этот стул - прекрасный выбор для тех, кто ценит не только удобство, но и эстетическую привлекательность мебели.</p>
            </div>
            <div className="good__info_card good__materials">
                <h6 className="good__info_title">Материалы:</h6>
                <p className="good__info_par">Сиденье и каркас выполнены из плотного материала МДФ в сочетании с шпоном различных цветов.</p>
            </div>
        </div>
    </div>
}

export default GoodModal;