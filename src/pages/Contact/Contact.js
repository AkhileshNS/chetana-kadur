
// External Libraries
import React , {Component} from 'react';
import nl2br from 'react-newline-to-break';

// Internal Libraries
import './Contact.css';
import Maps from '../../Maps';

let cssClassName = "Contact";

class Contact extends Component {
    render() {
        return <div className={cssClassName}>
            <p className={cssClassName+'title'}>CONTACT US</p><br />
            {nl2br('CHETANA HOSPITAL\nOpp. Venkateshwara Temple, N.H. 206,\nB.H. Road,  KADUR-577 548.')}<br />
            <span><strong>Ph : 08267 221553,  9449923000</strong></span>
            <Maps 
                isMarkerShown
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB1vGpq5aBDaq9YYV0gNeB2weTYFgUPLZY&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `400px` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `400px` }} />}
            />
        </div>;
    }
}

export default Contact;