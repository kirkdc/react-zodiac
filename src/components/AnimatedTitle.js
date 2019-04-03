import './AnimatedTitle.css';
import React from 'react';


const AnimatedTitle = () => {
    return (
        <div className="title-container">
            <h1 className="header"> Z<span className='react-span'><img className='react-logo' src="https://i.ibb.co/xKnyT2f/React-Logo.png" alt="Reactjs Logo"/></span>DIAC </h1>
            <h4 className="question"> Whats your star sign? </h4>
            <h5 className="instructions"> Enter your birth date below and find out</h5>
        </div>
    )
}

export default AnimatedTitle;