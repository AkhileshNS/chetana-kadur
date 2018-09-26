
// External Libraries
import React from 'react';
import Link from 'react-router-dom/Link';

// Internal Libraries
import './BottomBar.css';

let linkStyle = {
    color: 'white',
    textDecoration: 'none'
};

const BottomBar = () => {

    let currYear = '2018';
    currYear = new Date().getFullYear();

    return <div className="BottomBar">
        <div>
            <p>Copyright {currYear}</p>
        </div>
        <div>
            <ul>
                <li><Link to="/about" style={linkStyle}>About Us</Link></li>
                <li><Link to="/contact" style={linkStyle}>Contact Us</Link></li>
                <li><p>Terms and Conditions</p></li>
            </ul>
        </div>
    </div>;
}

export default BottomBar;