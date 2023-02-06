import React from 'react';
import './Button.css'
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline']; // Default button styles
const SIZES = ['btn--medium', 'btn--large']; // Default button sizes

export const Button = ({children, type, onClick, buttonStyle, buttonSize}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]; {/* If we pass through a button style - apply it, else use STYLES[0]*/}
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]; {/* If we pass through a button size - apply it, else use SIZES[0]*/}

    return (
        <Link to='sign-up' className='btn-mobile'>
            <button
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}
            >
                {children} {/* Whatever we pass through for button - render that*/}
            </button>
        </Link>
    )
};