
// External Libraries
import React, {Component} from 'react';
import nl2br from 'react-newline-to-break';

// Internal Library
import './Doctor.css';

class Doctor extends Component {

    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }
      
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }
      
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
      
    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    render() {

        let image = <div className="Doctorimage"><img src={this.props.image} alt="Unavailable" /></div>;
        let info = <div className="Doctorinfo">
            <p style={{fontSize:'var(--menu)'}}><strong>{this.props.title[0]}</strong></p>
            <p>{this.props.title[1]}</p>
            <p>{this.props.title[2]}</p>
            <br />
            {nl2br(this.props.body)}
        </div>;
        let layout = (this.props.reverse || this.state.width < 900) ? [image, info] : [info, image];

        return <div className="Doctor" style={{backgroundColor: ((this.props.isGreen) ? 'var(--green-tint)' : 'white')}}>
            <div>{layout}</div>
        </div>;

    }
}

export default Doctor;


