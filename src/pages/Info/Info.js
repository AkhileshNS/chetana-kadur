
// External Libraries
import React, {Component} from 'react';
import withRouter from 'react-router-dom/withRouter';
import nl2br from 'react-newline-to-break';

// Internal Libraries
import './Info.css';
import * as List from '../../ListOfFeatures';

class Info extends Component {
    
    render() {
        return <div className="Info">
            <p>{List[this.props.match.params.feature].title}</p>
            <img src={List[this.props.match.params.feature].image} alt="Unavailable"/>
            {nl2br(List[this.props.match.params.feature].body)}
        </div>;
    }

}

export default withRouter(Info);
