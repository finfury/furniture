import React from 'react';
import './Textarea.css'


function Textarea({placeholder}) {
    const focusTextareaHandler = (event) => {
        event.target.classList.add('focus')
    }

    const blurTextareaHandler = (event) => {
        event.target.classList.remove('focus')
    }
    return <textarea onFocus={(e) => focusTextareaHandler(e)}
                     onBlur={(e) => blurTextareaHandler(e)}
                     placeholder={placeholder} className="textarea"></textarea>
}

export default Textarea;