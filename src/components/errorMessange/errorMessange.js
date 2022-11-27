import React from 'react';
import './errorMessange.css';
import img from './got.jpeg';

const errorMessange = () => {
    return (
        <>
            <img src={img} alt='error'></img>
            <span>Something goes wrong</span>
        </>
    )
}

export default errorMessange;