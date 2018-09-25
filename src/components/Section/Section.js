
// External Libraries
import React from 'react';

// Internal Libraries
import './Section.css';

let cssClassName = 'Section';

const Section = (props) => {

    let titlebox = props.titlebox,greener = 'white';
    if (props.isGreen) {
        greener = 'var(--green-tint)';
    }

    if (props.title!=null) {
        titlebox = <p>{props.title}</p>;
    }

    return <div className={cssClassName} style={{backgroundColor: greener}}>
        <div style={{marginBottom: `${props.bottom}px`}}>
            <div className={cssClassName+'title'}>
                {titlebox}
            </div>
            <div className={cssClassName+'body'}>
                {props.children}
            </div>
        </div>
    </div>;
}

export default Section;