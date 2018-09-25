
// External Libraries
import React , {Component} from 'react';

// Internal Libraries
import './Doctors.css';

let cssClassName = "Doctors";

class Doctors extends Component {
    render() {
        return <div className={cssClassName}>
            <p>Doctors</p>
        </div>;
    }
}

export default Doctors;