import React, {useEffect, useState} from 'react';
import './GalleryPage.css'
import BasicPage from '../BasicPage/BasicPage.jsx'
import Modal from '../../components/Modal/Modal.jsx'
import GoodModal from '../../components/GoodModal/GoodModal.jsx'
import {categories, goods} from '../../static/static.js'
import GalleryItem from '../../components/GalleryItem/GalleryItem.jsx'


function GalleryPage() {
    const [activeCategory, setActiveCategory] = useState(1)

    return <BasicPage>
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
                {goods.filter(good => good.category === activeCategory).map((good, index, array) => {
                    if (index > (array.length - 1) / 2) return

                    let isBig = false

                    if ((index % 5) === 1) isBig = true
                    return <GalleryItem key={good.id} good={good} big={isBig} />
                })}
            </div>
            <div className="gallery__section reverse">
                {goods.filter(good => good.category === activeCategory).map((good, index, array) => {
                    if (index <= (array.length - 1) / 2) return

                    let isBig = false

                    if ((index % 5) === 2) isBig = true
                    return <GalleryItem key={good.id} good={good} big={isBig} />
                })}
            </div>
        </div>
        {goods.find(good => good.category === activeCategory) ?
            <></> :
            <div className={'gallery-nothing'}>К сожалению, ничего не нашлось :)</div>}
    </BasicPage>
}

export default GalleryPage;