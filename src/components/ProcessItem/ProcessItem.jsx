import React from 'react';
import './ProcessItem.css'


function ProcessItem({process}) {
    return <div className={'process-item'}>
        <div className="process-item__head">
            <img src={process.icon} className="process-item__head_icon" />
            <h5 className="process-item__head_title">{process.title}</h5>
        </div>
        <p className="process-item__text">{process.text}</p>
    </div>
}

export default ProcessItem;