
// External Libraries
import React from 'react';

// Internal Libraries
import './IconWithTag.css';

const IconWithTag = (props) => {
    return <div className="IWT" style={{marginTop: `${props.top}px`, width: `${props.width}px`}}>
        <img src={props.image} style={{width: `${props.percent}%`}} alt="Unavailable" />
        <span>{props.tag}</span>
    </div>
}

export default IconWithTag;