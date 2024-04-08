import React from 'react';
import './Process.css'


function Process() {
    return <div className={'main-process'}>
        <div className="main-process__up">
            <div className={'process-item'}>
                <div className="process-item__head">
                    <img src='../../../img/icons/process-1.svg' className="process-item__head_icon" />
                    <h5 className="process-item__head_title">Заявка на расчет и консультация</h5>
                </div>
                <p className="process-item__text">Для предварительного расчета проекта мы ждём от вас чертежи, развертки или визуализацию с приблизительными размерами или рисунки от руки. После лучший дизайнер нашей компании будет готов дать вам консультацию и ответить на все ваши вопросы</p>
            </div>
            <div className={'process-item'}>
                <div className="process-item__head">
                    <img src='../../../img/icons/process-2.svg' className="process-item__head_icon" />
                    <h5 className="process-item__head_title">Согласование проекта</h5>
                </div>
                <p className="process-item__text">Заключаем договор, утверждаем материалы и комплектацию, производим замер на объекте, создаём 3D модель и проектные чертежи будущей мебели</p>
            </div>
            <div className={'process-item'}>
                <div className="process-item__head">
                    <img src='../../../img/icons/process-3.svg' className="process-item__head_icon" />
                    <h5 className="process-item__head_title">Доставка мебели</h5>
                </div>
                <p className="process-item__text">Готовая мебель доставляется в удобное для вас время. Производится чистый и аккуратный монтаж нашими профессиональными монтажными бригадами. Наши мастера могут не только изготовить, но и встроить весь гарнитур и фурнитуру к ним в интерьер.</p>
            </div>
        </div>
        <div className="main-process__line"></div>
        <div className="main-process__down">
            <div className={'process-item'}>
                <div className="process-item__head">
                    <img src='../../../img/icons/process-1.svg' className="process-item__head_icon" />
                    <h5 className="process-item__head_title">Подготовка расчёта мебели на заказ</h5>
                </div>
                <p className="process-item__text">В течение 2-3 дней вы получаете ответ от менеджера с предварительным расчетом стоимости и сроками изготовления. Наши менеджеры рассчитают вам несколько вариантов услуги мебели на заказ от производителя - бюджетную и дорогую, а также варианты доставки по Москве и Московской области.</p>
            </div>
            <div className={'process-item'}>
                <div className="process-item__head">
                    <img src='../../../img/icons/process-2.svg' className="process-item__head_icon" />
                    <h5 className="process-item__head_title">Производство</h5>
                </div>
                <p className="process-item__text">Передаем проект в производство. Изготавливаем точно в срок.</p>
            </div>
        </div>
    </div>
}

export default Process;