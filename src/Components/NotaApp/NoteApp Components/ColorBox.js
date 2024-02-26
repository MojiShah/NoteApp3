import React from 'react';
import './ColorBox.css';

function ColorBox(props) {
    //States

    //functions
    const clickHandler = (color) => {
        props.colorFunc(color);
    }

    return (
        <>
            <div className='color-btn' 
                style={{ backgroundColor: `${props.colorMap}`}}
                onClick={() => clickHandler(props.colorMap)}
                >

            </div>
        </>
    )
}

export default ColorBox