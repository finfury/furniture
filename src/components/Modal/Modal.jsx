import React from 'react';
import './Modal.css'
import {bodyLock} from '../../helpers/lock.js'


function Modal({active, setActive, children}) {
    return <div className={active ? "modal active" : "modal"} onClick={() => {bodyLock(false); setActive(false)}}>
        <div className={active ? "modal__content active" : "modal__content"} onClick={(e) => e.stopPropagation()}>
            {children}
        </div>
    </div>
}

export default Modal;