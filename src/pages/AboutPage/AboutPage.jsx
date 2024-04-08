import React from 'react';
import './AboutPage.css'
import BasicPage from '../BasicPage/BasicPage.jsx'


function AboutPage() {
    return <BasicPage>
        <div className={'directions header-padding-top'}>
            <img src="../../../img/touch.png" className="direction-touch direction-touch-left" />
            <img src="../../../img/touch.png" className="direction-touch direction-touch-right" />
            <div className="directions__body">
                <h3 className="directions__title">Мы создаём коллекцию утилитарных скульптур, которые меняют язык пространства.</h3>
                <div className="directions__info">
                    <h4 className="directions__info_title">Компания LOREM развивается в нескольких направлениях:</h4>
                    <ol className="directions-list">
                        <li className="directions__item">1. Серийное производство дизайнерской мебели</li>
                        <li className="directions__item">2. Лимитированная коллекционная мебель</li>
                        <li className="directions__item">3. Создаем арт-объекты и предметы искусства</li>
                        <li className="directions__item">4. Экологически чистая мебель</li>
                    </ol>
                </div>
            </div>
        </div>
        <div className="principles">
            <div className="principles__info">
                <h4 className="principles__info_title"><span>Наши принципы</span></h4>
                <p className="principles__info_subtitle">Мы - команда творческих дизайнеров и мастеров, которые смело идут в ногу со временем, создавая уникальную мебель, которая обязательно привлечет внимание и будет говорить о вашем утонченном вкусе.</p>
                <ol className="principles__list">
                    <li className="principles__item">1. Инновационный подход к дизайну мебели, отличающийся от классических стилей.</li>
                    <li className="principles__item">2. Уникальные материалы и технологии производства, которые позволяют создавать необычные формы и рисунки.</li>
                    <li className="principles__item">3. Внимание к деталям и качеству каждой детали мебели.</li>
                    <li className="principles__item">4. Готовность к индивидуальным заказам и кастомизации мебели под конкретные потребности и пожелания клиента.</li>
                    <li className="principles__item">5. Сочетание функциональности и эстетического дизайна в каждом изделии.</li>
                    <li className="principles__item">6. Экологическая ответственность компании в выборе материалов и производственных процессов.</li>
                    <li className="principles__item">7. Высокий уровень квалификации дизайнеров и производственных специалистов, работающих над каждым изделием.</li>
                </ol>
            </div>
            <div className="principles__photo">
                <img src="../../../img/desk.png" alt="desk" className="principles__photo_image" />
            </div>
        </div>
        <div className="about-presentation">
            <video muted className="about-video" autoPlay controls="controls" poster='../../../img/video.jpg'>
                <source src="../../../video/video%20(2).mp4" type='video/mp4' />
                Тег video не поддерживается вашим браузером.
            </video>
        </div>
    </BasicPage>
}

export default AboutPage;