
// External Libraries
import React from 'react';

// Internal Libraries
import './Feature.css';

const Feature = (props) => {

    let bgColor = 'white';
    if (props.isGreen) {
        bgColor = 'var(--green-tint)';
    }

    return <div className="Feature" style={{backgroundColor: bgColor}}>
        <div>
            <div className="Featureimage">
                <img src={props.image} alt="Unavailable" style={{width: `${props.width}px`}}/>
            </div>
            <div className="Featureinfo">
                <p>{props.title}</p>
                <span>{props.subtext}</span><br />
                <span>{props.body}</span>
            </div>
        </div>
    </div>
}

export default Feature;