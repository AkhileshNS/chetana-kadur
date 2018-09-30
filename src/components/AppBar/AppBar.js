
// External Libraries
import React, {Component} from 'react';
import withRouter from 'react-router-dom/withRouter';

// Internal Libraries
import './AppBar.css';
import logo from '../../assets/chetana.png';
import menu from '../../assets/menu.png';
import main from '../../assets/main.png';

let cssClassName = 'AppBar';

let linkStyle = {
    padding: '16px 12px',
    color: 'white',
    fontSize: 'var(--body)',
    outline: 'none',
    textDecoration: 'none'
};

class AppBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false
        };
    }

    openPage = (value) => {

        if(this.props.history.location.pathname===value){}
        //The User is currently at home and he pressed something
        else {
            this.props.history.push(value);
        }
        
    }

    render() {

        let backdropStyle,sidedrawerStyle,links = [],items=[];
        if (this.props.links!=null) {
            for (let link of this.props.links) {
                let Style = {};
                if (link.src===this.props.history.location.pathname) {
                    Style['backgroundColor'] = 'var(--green-dark)';
                }
                links.push(<div key={link.title} style={Style}>
                    <span onClick={() => this.openPage(link.src)} style={linkStyle}>
                        {link.title}
                    </span>
                </div>);
            }
        }

        if (this.state.open) {

            for (let link of this.props.links) {
                let divStyle = {},Style = {
                    textDecoration: 'none'
                };
                if (link.src===this.props.history.location.pathname){
                    Style['color'] = 'white';
                    divStyle['backgroundColor'] = 'var(--green-bg)';
                } else {
                    Style['color'] = 'black';
                }
                items.push(<li key={link.title}>
                    <div style={divStyle} onClick={() => this.openPage(link.src)}>
                        <span style={Style}>{link.title}</span>
                    </div>
                </li>)
            }

            sidedrawerStyle = {
                transform: 'translateX(0)'
            };
            backdropStyle = {
                display: 'block',
                opacity: '0.5'
            };
        } else {
            sidedrawerStyle = {
                transform: 'translateX(-100%)'
            };
            backdropStyle = {
                opacity: '0',
                display: 'none'
            };
        }

        return <div className={cssClassName}>
            <div className={cssClassName+'sidedrawer'} style={sidedrawerStyle}><ul>{items}</ul></div>
            <div className={cssClassName+'backdrop'} style={backdropStyle} onClick={() => this.setState({open: false})}/>
            <p>Contact Us: 08267 221553,  9449923000</p>
            <div className={cssClassName+'desktop'}>
                <img src={logo} alt="Unavailable" onClick={() => this.openPage('/')} />
                {links}
            </div>
            <div className={cssClassName+'mobile'}>
                <img src={menu} alt="Unavailable" onClick={() => this.setState({open: true})}/>
                <img src={logo} alt="Unavailable" />
            </div>
            <img src={main} alt='Unavailable' style={{width: '100%', zIndex: '-1'}} onClick={() => this.openPage('/')} />
        </div>;
    }
};

export default withRouter(AppBar);