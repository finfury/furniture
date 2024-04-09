import React from 'react';
import {processes} from '../../static/static.js'
import './Process.css'


function Process() {
    return <div className={'main-process'}>
        <div className="main-process__up">
            {processes.map(process => {
                if (!(process.step % 2)) return;
                return <div className={'process-item'} key={process.step}>
                    <div className="process-item__head">
                        <img src={'../../../img/icons/' + process.icon} className="process-item__head_icon" />
                        <h5 className="process-item__head_title">{process.title}</h5>
                    </div>
                    <p className="process-item__text">{process.text}</p>
                </div>
            })}
        </div>
        <div className="main-process__line"></div>
        <div className="main-process__down">
            {processes.map(process => {
                if (process.step % 2) return;
                return <div className={'process-item'} key={process.step}>
                    <div className="process-item__head">
                        <img src={'../../../img/icons/' + process.icon} className="process-item__head_icon" />
                        <h5 className="process-item__head_title">{process.title}</h5>
                    </div>
                    <p className="process-item__text">{process.text}</p>
                </div>
            })}
        </div>
    </div>
}

export default Process;