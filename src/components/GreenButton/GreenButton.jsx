import React from 'react';
import './GreenButton.css'


function GreenButton({children}) {
    return <button className={'green-button'}>{children}</button>
}

export default GreenButton;