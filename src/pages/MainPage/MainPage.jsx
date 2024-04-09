import React from 'react';
import MainSlider from '../../components/MainSlider/MainSlider.jsx'
import Section from '../../components/Section/Section.jsx'
import Process from '../../components/Process/Process.jsx'
import BasicPage from '../BasicPage/BasicPage.jsx'
import './MainPage.css'


function MainPage() {
    return <BasicPage>
        <MainSlider />
        <Section title={'Способны воплотить то, что вы задумали, но с творческим подходом'}>
            <ul className="main-photos">
                <li className="main-photos__item">
                    <img src="../../../img/example-1.jpg" alt="flat" className="main-photos__item_img" />
                </li>
                <li className="main-photos__item">
                    <img src="../../../img/example-2.jpg" alt="flat" className="main-photos__item_img" />
                </li>
                <li className="main-photos__item">
                    <img src="../../../img/example-3.jpg" alt="flat" className="main-photos__item_img" />
                </li>
                <li className="main-photos__item">
                    <img src="../../../img/example-4.jpg" alt="flat" className="main-photos__item_img" />
                </li>
                <li className="main-photos__item">
                    <img src="../../../img/example-5.jpg" alt="flat" className="main-photos__item_img" />
                </li>
            </ul>
        </Section>
        <Section title={'Процесс заказа'}>
            <Process />
        </Section>
    </BasicPage>
}

export default MainPage;