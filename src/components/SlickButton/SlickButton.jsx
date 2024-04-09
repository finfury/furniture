import React from 'react';
import './SlickButton.css'


function SlickButton({currentSlide, slideCount, children, ...props}) {
    return <div className="slider-arrow" {...props}>
        {children}
    </div>
}

export default SlickButton;