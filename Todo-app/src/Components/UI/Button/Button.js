import React from 'react';
import './Button.css';

const Button = (props) =>{
    return(
        <button type='submit' className='button' onClick={props.onClick}>
            {props.children}
        </button>
    );
}

export default Button;