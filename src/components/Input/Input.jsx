import React from 'react';
import './Input.css'


function Input({type = 'text', placeholder = '', className = '', name = '', ...props}) {
    const focusInputHandler = (event) => {
        event.target.classList.add('focus')
    }

    const blurInputHandler = (event) => {
        event.target.classList.remove('focus')
    }

    return <input onFocus={(e) => focusInputHandler(e)}
                  onBlur={(e) => blurInputHandler(e)}
                  type={type}
                  name={name}
                  placeholder={placeholder}
                  className={'input ' + className}
                  {...props} />
}

export default Input;