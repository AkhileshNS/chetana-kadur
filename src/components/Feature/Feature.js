
// External Libraries
import React, {Component} from 'react';
import withRouter from 'react-router-dom/withRouter';

// Internal Libraries
import './Feature.css';

class Feature extends Component {

    pushPage = (url) => {
        this.props.history.push(url);
    }

    render() {

        let bgColor = 'white';
        if (this.props.isGreen) {
            bgColor = 'var(--green-tint)';
        }

        return <div className="Feature" style={{backgroundColor: bgColor}}>
            <div>
                <div className="Featureimage">
                    <img src={this.props.image} alt="Unavailable" style={{maxWidth: `${this.props.width}px`}}/>
                </div>
                <div className="Featureinfo">
                    <p onClick={() => this.pushPage(this.props.url)}>{this.props.title}</p>
                    <span>{this.props.subtext}</span><br />
                    <span>{this.props.body}</span>
                </div>
            </div>
        </div>;

    }
}

export default withRouter(Feature);