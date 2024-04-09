import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './MainSlider.css'
import {sales} from '../../static/static.js'


const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    cssEase: "ease",
    appendDots: dots => (
        <>
            <ul className={'main-slider__dots'}>
                {dots}
            </ul>
        </>
    ),
}

function MainSlider() {
    return <div className="main__header">
        <Slider {...settings}>
            {sales.map(good => {
                return <div className="slide" key={good.goodId}>
                    <div className="main-slider__item">
                        <div className="main-slider__description">
                            <h3 className="main-slider__description_title">{good.title}</h3>
                            <p className="main-slider__description_text">{good.subtitle}</p>
                        </div>
                        <div className="main-slider__item_img">
                            <img src={"../../../img/" + good.poster} alt={good.title} />
                        </div>
                    </div>
                </div>
            })}
        </Slider>
    </div>
}

export default MainSlider;