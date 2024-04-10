import React, {useState} from 'react';
import './GalleryItem.css'
import GoodModal from '../GoodModal/GoodModal.jsx'
import Modal from '../Modal/Modal.jsx'
import {bodyLock} from '../../helpers/lock.js'


function GalleryItem({good, big = false}) {
    const [activeModal, setActiveModal] = useState(false)

    const clickItemGalleryHandler = () => {
        bodyLock(true)
        setActiveModal(true)
    }

    return <>
        <Modal active={activeModal} setActive={setActiveModal}>
            <GoodModal setActiveModal={setActiveModal} good={good} />
        </Modal>
        <div className={big ? "item-gallery big" : "item-gallery"}
             onClick={() => clickItemGalleryHandler()}
             onClick={() => setActiveModal(true)}
             key={good.id}>
            <div className="item-gallery__photo">
                <img src={"../../../img/" + good.poster} className="item-gallery__photo_img" />
            </div>
            <div className="item-gallery__description">
                <h6 className="item-gallery__description_title">{good.name}</h6>
                <p className="item-gallery__description_price item-gallery_text">{good.price}</p>
                <p className="item-gallery__description_material item-gallery_text">{good.materials}</p>
                <p className="item-gallery__description_size item-gallery_text">{good.size}</p>
            </div>
        </div>
    </>
}

export default GalleryItem;