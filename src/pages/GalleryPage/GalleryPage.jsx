import React, {useState} from 'react';
import './GalleryPage.css'
import BasicPage from '../BasicPage/BasicPage.jsx'
import Modal from '../../components/Modal/Modal.jsx'
import GoodModal from '../../components/GoodModal/GoodModal.jsx'


function GalleryPage() {
    const [activeModal, setActiveModal] = useState(false)

    return <BasicPage>
        <Modal active={activeModal} setActive={setActiveModal} >
            <GoodModal setActiveModal={setActiveModal} />
        </Modal>
        <div className="gallery-categories header-padding-top">
            <ul className="gallery-categories__list">
                <li className="gallery-categories__item">Тумбы</li>
                <li className="gallery-categories__item active">Столы и стулья</li>
                <li className="gallery-categories__item">Кровати</li>
                <li className="gallery-categories__item">Комоды</li>
                <li className="gallery-categories__item">Полки и стеллажи</li>
            </ul>
        </div>
        <div className="gallery">
            <ul className="gallery__section standard">
                <li onClick={() => setActiveModal(true)} className="item-gallery start-big">
                    <div className="item-gallery__photo">
                        <img src="../../../img/gallery-1.jpg" className="item-gallery__photo_img" />
                    </div>
                    <div className="item-gallery__description">
                        <a href="" className="item-gallery__description_title">Барный стул "Комета"</a>
                        <p className="item-gallery__description_price item-gallery_text">47000 руб</p>
                        <p className="item-gallery__description_material item-gallery_text">Материал: МДФ, шпон</p>
                        <p className="item-gallery__description_size item-gallery_text">Размеры: 75х30х53 (см)</p>
                    </div>
                </li>
                <li className="item-gallery">
                    <div className="item-gallery__photo">
                        <img src="../../../img/gallery-2.jpg" className="item-gallery__photo_img" />
                    </div>
                    <div className="item-gallery__description">
                        <a href='' className="item-gallery__description_title">Барный стул "Комета"</a>
                        <p className="item-gallery__description_price item-gallery_text">47000 руб</p>
                        <p className="item-gallery__description_material item-gallery_text">Материал: МДФ, шпон</p>
                        <p className="item-gallery__description_size item-gallery_text">Размеры: 75х30х53 (см)</p>
                    </div>
                </li>
                <li className="item-gallery">
                    <div className="item-gallery__photo">
                        <img src="../../../img/gallery-3.jpg" className="item-gallery__photo_img" />
                    </div>
                    <div className="item-gallery__description">
                        <a href='' className="item-gallery__description_title">Барный стул "Комета"</a>
                        <p className="item-gallery__description_price item-gallery_text">47000 руб</p>
                        <p className="item-gallery__description_material item-gallery_text">Материал: МДФ, шпон</p>
                        <p className="item-gallery__description_size item-gallery_text">Размеры: 75х30х53 (см)</p>
                    </div>
                </li>
                <li className="item-gallery">
                    <div className="item-gallery__photo">
                        <img src="../../../img/gallery-4.jpg" className="item-gallery__photo_img" />
                    </div>
                    <div className="item-gallery__description">
                        <a href='' className="item-gallery__description_title">Барный стул "Комета"</a>
                        <p className="item-gallery__description_price item-gallery_text">47000 руб</p>
                        <p className="item-gallery__description_material item-gallery_text">Материал: МДФ, шпон</p>
                        <p className="item-gallery__description_size item-gallery_text">Размеры: 75х30х53 (см)</p>
                    </div>
                </li>
                <li className="item-gallery">
                    <div className="item-gallery__photo">
                        <img src="../../../img/gallery-5.jpg" className="item-gallery__photo_img" />
                    </div>
                    <div className="item-gallery__description">
                        <a href='' className="item-gallery__description_title">Барный стул "Комета"</a>
                        <p className="item-gallery__description_price item-gallery_text">47000 руб</p>
                        <p className="item-gallery__description_material item-gallery_text">Материал: МДФ, шпон</p>
                        <p className="item-gallery__description_size item-gallery_text">Размеры: 75х30х53 (см)</p>
                    </div>
                </li>
            </ul>
            <ul className="gallery__section reverse">
                <li className="item-gallery">
                    <div className="item-gallery__photo">
                        <img src="../../../img/gallery-6.jpg" className="item-gallery__photo_img" />
                    </div>
                    <div className="item-gallery__description">
                        <a href='' className="item-gallery__description_title">Барный стул "Комета"</a>
                        <p className="item-gallery__description_price item-gallery_text">47000 руб</p>
                        <p className="item-gallery__description_material item-gallery_text">Материал: МДФ, шпон</p>
                        <p className="item-gallery__description_size item-gallery_text">Размеры: 75х30х53 (см)</p>
                    </div>
                </li>
                <li className="item-gallery">
                    <div className="item-gallery__photo">
                        <img src="../../../img/gallery-7.jpg" className="item-gallery__photo_img" />
                    </div>
                    <div className="item-gallery__description">
                        <a href='' className="item-gallery__description_title">Барный стул "Комета"</a>
                        <p className="item-gallery__description_price item-gallery_text">47000 руб</p>
                        <p className="item-gallery__description_material item-gallery_text">Материал: МДФ, шпон</p>
                        <p className="item-gallery__description_size item-gallery_text">Размеры: 75х30х53 (см)</p>
                    </div>
                </li>
                <li className="item-gallery end-big">
                    <div className="item-gallery__photo">
                        <img src="../../../img/gallery-8.jpg" className="item-gallery__photo_img" />
                    </div>
                    <div className="item-gallery__description">
                        <a href='' className="item-gallery__description_title">Барный стул "Комета"</a>
                        <p className="item-gallery__description_price item-gallery_text">47000 руб</p>
                        <p className="item-gallery__description_material item-gallery_text">Материал: МДФ, шпон</p>
                        <p className="item-gallery__description_size item-gallery_text">Размеры: 75х30х53 (см)</p>
                    </div>
                </li>
                <li className="item-gallery">
                    <div className="item-gallery__photo">
                        <img src="../../../img/gallery-9.jpg" className="item-gallery__photo_img" />
                    </div>
                    <div className="item-gallery__description">
                        <a href='' className="item-gallery__description_title">Барный стул "Комета"</a>
                        <p className="item-gallery__description_price item-gallery_text">47000 руб</p>
                        <p className="item-gallery__description_material item-gallery_text">Материал: МДФ, шпон</p>
                        <p className="item-gallery__description_size item-gallery_text">Размеры: 75х30х53 (см)</p>
                    </div>
                </li>
                <li className="item-gallery">
                    <div className="item-gallery__photo">
                        <img src="../../../img/gallery-10.jpg" className="item-gallery__photo_img" />
                    </div>
                    <div className="item-gallery__description">
                        <a href='' className="item-gallery__description_title">Барный стул "Комета"</a>
                        <p className="item-gallery__description_price item-gallery_text">47000 руб</p>
                        <p className="item-gallery__description_material item-gallery_text">Материал: МДФ, шпон</p>
                        <p className="item-gallery__description_size item-gallery_text">Размеры: 75х30х53 (см)</p>
                    </div>
                </li>
            </ul>
        </div>
    </BasicPage>
}

export default GalleryPage;