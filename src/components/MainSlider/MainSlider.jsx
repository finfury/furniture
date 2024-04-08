import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './MainSlider.css'


function MainSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: dots => (
            <>
                <ul className={'main-slider__dots'}>
                    {dots}
                </ul>
            </>
        ),
    }

    return <div className="main__header">
        <Slider {...settings}>
            <div className="slide">
                <div className="main-slider__item">
                    <div className="main-slider__description">
                        <h3 className="main-slider__description_title">Мебель, как предмет искусства</h3>
                        <p className="main-slider__description_text">Наша мебель является функциональной скульптурой, искусством в интерьере, акцентом, но при этом так же удобна и комфортна.</p>
                    </div>
                    <div className="main-slider__item_img">
                        <img src="../../../img/chair.png" alt="chair" className="" />
                    </div>
                </div>
            </div>
            <div className="slide">
                <div className="main-slider__item">
                    <div className="main-slider__description">
                        <h3 className="main-slider__description_title">Мебель, как предмет искусства</h3>
                        <p className="main-slider__description_text">Наша мебель является функциональной скульптурой, искусством в интерьере, акцентом, но при этом так же удобна и комфортна.</p>
                    </div>
                    <div className="main-slider__item_img">
                        <img src="../../../img/main-slide-2.png" alt="chest" className="main-slider__item_img" />
                    </div>
                </div>
            </div>
            <div className="slide">
                <div className="main-slider__item">
                    <div className="main-slider__description">
                        <h3 className="main-slider__description_title">Мебель, как предмет искусства</h3>
                        <p className="main-slider__description_text">Наша мебель является функциональной скульптурой, искусством в интерьере, акцентом, но при этом так же удобна и комфортна.</p>
                    </div>
                    <div className="main-slider__item_img">
                        <img src="../../../img/main-slide-3.png" alt="chair" className="main-slider__item_img" />
                    </div>
                </div>
            </div>
        </Slider>
    </div>
}

export default MainSlider;