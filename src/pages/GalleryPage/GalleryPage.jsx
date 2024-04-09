import React, {useState} from 'react';
import './GalleryPage.css'
import BasicPage from '../BasicPage/BasicPage.jsx'
import Modal from '../../components/Modal/Modal.jsx'
import GoodModal from '../../components/GoodModal/GoodModal.jsx'
import {bodyLock} from '../../helpers/lock.js'
import {categories} from '../../static/static.js'


function GalleryPage() {
    const [activeModal, setActiveModal] = useState(false)
    const [activeCategory, setActiveCategory] = useState(1)

    return <BasicPage>
        <Modal active={activeModal} setActive={setActiveModal}>
            <GoodModal setActiveModal={setActiveModal} />
        </Modal>
        <div className="gallery-categories header-padding-top">
            <ul className="gallery-categories__list">
                {categories.map(category => {
                    let className = "gallery-categories__item";
                    if (activeCategory === category.id) {
                        className += " active"
                    }
                    return <li key={category.id}
                               onClick={() => setActiveCategory(category.id)}
                               className={className}>{category.name}</li>
                })}
            </ul>
        </div>
        <div className="gallery">
            <div className="gallery__section standard">
                <div onClick={() => {
                    bodyLock(true);
                    setActiveModal(true)
                }} className="item-gallery big">
                    <div className="item-gallery__photo">
                        <img src="../../../img/gallery-1.jpg" className="item-gallery__photo_img" />
                    </div>
                    <div className="item-gallery__description">
                        <a href="" className="item-gallery__description_title">Барный стул "Комета"</a>
                        <p className="item-gallery__description_price item-gallery_text">47000 руб</p>
                        <p className="item-gallery__description_material item-gallery_text">Материал: МДФ, шпон</p>
                        <p className="item-gallery__description_size item-gallery_text">Размеры: 75х30х53 (см)</p>
                    </div>
                </div>
                <div className="item-gallery">
                    <div className="item-gallery__photo">
                        <img src="../../../img/gallery-2.jpg" className="item-gallery__photo_img" />
                    </div>
                    <div className="item-gallery__description">
                        <a href="" className="item-gallery__description_title">Барный стул "Комета"</a>
                        <p className="item-gallery__description_price item-gallery_text">47000 руб</p>
                        <p className="item-gallery__description_material item-gallery_text">Материал: МДФ, шпон</p>
                        <p className="item-gallery__description_size item-gallery_text">Размеры: 75х30х53 (см)</p>
                    </div>
                </div>
                <div className="item-gallery">
                    <div className="item-gallery__photo">
                        <img src="../../../img/gallery-3.jpg" className="item-gallery__photo_img" />
                    </div>
                    <div className="item-gallery__description">
                        <a href="" className="item-gallery__description_title">Барный стул "Комета"</a>
                        <p className="item-gallery__description_price item-gallery_text">47000 руб</p>
                        <p className="item-gallery__description_material item-gallery_text">Материал: МДФ, шпон</p>
                        <p className="item-gallery__description_size item-gallery_text">Размеры: 75х30х53 (см)</p>
                    </div>
                </div>
                <div className="item-gallery">
                    <div className="item-gallery__photo">
                        <img src="../../../img/gallery-4.jpg" className="item-gallery__photo_img" />
                    </div>
                    <div className="item-gallery__description">
                        <a href="" className="item-gallery__description_title">Барный стул "Комета"</a>
                        <p className="item-gallery__description_price item-gallery_text">47000 руб</p>
                        <p className="item-gallery__description_material item-gallery_text">Материал: МДФ, шпон</p>
                        <p className="item-gallery__description_size item-gallery_text">Размеры: 75х30х53 (см)</p>
                    </div>
                </div>
                <div className="item-gallery">
                    <div className="item-gallery__photo">
                        <img src="../../../img/gallery-5.jpg" className="item-gallery__photo_img" />
                    </div>
                    <div className="item-gallery__description">
                        <a href="" className="item-gallery__description_title">Барный стул "Комета"</a>
                        <p className="item-gallery__description_price item-gallery_text">47000 руб</p>
                        <p className="item-gallery__description_material item-gallery_text">Материал: МДФ, шпон</p>
                        <p className="item-gallery__description_size item-gallery_text">Размеры: 75х30х53 (см)</p>
                    </div>
                </div>
            </div>
            {/*<ul className="gallery__section standard">*/}

            {/*</ul>
            <ul className="gallery__section reverse">*/}
            <div className="gallery__section reverse">
                <div className="item-gallery">
                    <div className="item-gallery__photo">
                        <img src="../../../img/gallery-6.jpg" className="item-gallery__photo_img" />
                    </div>
                    <div className="item-gallery__description">
                        <a href="" className="item-gallery__description_title">Барный стул "Комета"</a>
                        <p className="item-gallery__description_price item-gallery_text">47000 руб</p>
                        <p className="item-gallery__description_material item-gallery_text">Материал: МДФ, шпон</p>
                        <p className="item-gallery__description_size item-gallery_text">Размеры: 75х30х53 (см)</p>
                    </div>
                </div>
                <div className="item-gallery">
                    <div className="item-gallery__photo">
                        <img src="../../../img/gallery-7.jpg" className="item-gallery__photo_img" />
                    </div>
                    <div className="item-gallery__description">
                        <a href="" className="item-gallery__description_title">Барный стул "Комета"</a>
                        <p className="item-gallery__description_price item-gallery_text">47000 руб</p>
                        <p className="item-gallery__description_material item-gallery_text">Материал: МДФ, шпон</p>
                        <p className="item-gallery__description_size item-gallery_text">Размеры: 75х30х53 (см)</p>
                    </div>
                </div>
                <div className="item-gallery big">
                    <div className="item-gallery__photo">
                        <img src="../../../img/gallery-8.jpg" className="item-gallery__photo_img" />
                    </div>
                    <div className="item-gallery__description">
                        <a href="" className="item-gallery__description_title">Барный стул "Комета"</a>
                        <p className="item-gallery__description_price item-gallery_text">47000 руб</p>
                        <p className="item-gallery__description_material item-gallery_text">Материал: МДФ, шпон</p>
                        <p className="item-gallery__description_size item-gallery_text">Размеры: 75х30х53 (см)</p>
                    </div>
                </div>
                <div className="item-gallery">
                    <div className="item-gallery__photo">
                        <img src="../../../img/gallery-9.jpg" className="item-gallery__photo_img" />
                    </div>
                    <div className="item-gallery__description">
                        <a href="" className="item-gallery__description_title">Барный стул "Комета"</a>
                        <p className="item-gallery__description_price item-gallery_text">47000 руб</p>
                        <p className="item-gallery__description_material item-gallery_text">Материал: МДФ, шпон</p>
                        <p className="item-gallery__description_size item-gallery_text">Размеры: 75х30х53 (см)</p>
                    </div>
                </div>
                <div className="item-gallery">
                    <div className="item-gallery__photo">
                        <img src="../../../img/gallery-10.jpg" className="item-gallery__photo_img" />
                    </div>
                    <div className="item-gallery__description">
                        <a href="" className="item-gallery__description_title">Барный стул "Комета"</a>
                        <p className="item-gallery__description_price item-gallery_text">47000 руб</p>
                        <p className="item-gallery__description_material item-gallery_text">Материал: МДФ, шпон</p>
                        <p className="item-gallery__description_size item-gallery_text">Размеры: 75х30х53 (см)</p>
                    </div>
                </div>
            </div>
            {/*</ul>*/}
        </div>
    </BasicPage>
}

export default GalleryPage;