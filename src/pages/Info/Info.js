
// External Libraries
import React, {Component} from 'react';
import withRouter from 'react-router-dom/withRouter';
import nl2br from 'react-newline-to-break';

// Internal Libraries
import './Info.css';
import * as List from '../../ListOfFeatures';

class Info extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }
    
    render() {

        let secImage = null;

        if ("secImage" in List[this.props.match.params.feature]) {
            secImage = <img src={List[this.props.match.params.feature].secImage} alt="Unavailable"/>;
        }

        return <div className="Info">
            <p>{List[this.props.match.params.feature].title}</p>
            <img src={List[this.props.match.params.feature].image} alt="Unavailable"/>
            {secImage}
            {nl2br(List[this.props.match.params.feature].body)}
        </div>;
    }

}

export default withRouter(Info);
