import React, {useState} from 'react'
import {Rating} from '@mui/material'
import Slider from 'react-slick'
import GreenButton from '../GreenButton/GreenButton.jsx'
import SlickButton from '../SlickButton/SlickButton.jsx'
import './GoodModal.css'


function GoodModal({good, setActiveModal}) {
    const [value, setValue] = useState(4);

    const settings = {
        dots: false,
        infinite: false,
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
        prevArrow: <SlickButton>
            <img className="slider-arrow_icon prev" src="../../../img/arrow-left.png" alt="previosly" />
        </SlickButton>,
        nextArrow: <SlickButton>
            <img className="slider-arrow_icon next" src="../../../img/arrow-right.png" alt="next" />
        </SlickButton>,
    }

    const getSlides = (good) => {
        if (!good.info.photos.length) return <div>Фоток нет, не ищи...</div>

        return good.info.photos.map(photo => {
            return <div key={photo} className="good-slide">
                <img className="good-slide_img" src={"../../../img/" + photo} alt={good.name} />
            </div>
        })
    }

    return <div className={'good'}>
        <img onClick={() => setActiveModal(false)} src="../../../img/close.png" alt="close" className="modal-close_img" />
        <div className="good__slider">
            <Slider {...settings}>
                {getSlides(good)}
            </Slider>
        </div>
        <div className="good__main">
            <div className="good__label">
                <h3 className="good__label_title">{good.name}</h3>
                <p className="good__label_price">{good.price}</p>
            </div>
            <div className="good__feedback">
                <div className="good__feedback_rating">
                    <Rating name="simple-controlled" value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }} />
                    <span className="good__feedback_rating-value">({value})</span>
                </div>
                <GreenButton>Оставить отзыв</GreenButton>
            </div>
        </div>
        <div className="good__info">
            <div className="good__info_card good__size">
                <h6 className="good__info_title">Дополнительно</h6>
                {good.info.extra.map(info => {
                    return <p key={info} className="good__info_par">{info}</p>
                })}
            </div>
            <div className="good__info_card">
                <h6 className="good__info_title">Описание:</h6>
                {good.info.description.map(info => {
                    return <p key={info} className="good__info_par">{info}</p>
                })}
            </div>
            <div className="good__info_card good__materials">
                <h6 className="good__info_title">Материалы:</h6>
                {good.info.materials.map(info => {
                    return <p key={info} className="good__info_par">{info}</p>
                })}
            </div>
        </div>
    </div>
}

export default GoodModal;