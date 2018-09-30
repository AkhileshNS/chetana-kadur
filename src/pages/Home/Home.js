
// External Libraries
import React , {Component, Fragment} from 'react';
import withRouter from 'react-router-dom/withRouter';

// Internal Libraries
import './Home.css';
import '../../global.css';
import Section from '../../components/Section/Section';
import IconWithTag from '../../components/IconWithTag/IconWithTag';
import Maps from '../../Maps';

// Images
import heart from '../../assets/heart.png';
import lungs from '../../assets/lungs.png';
import brain from '../../assets/brain.png';
import kidneys from '../../assets/kidneys.png';
import stomach from '../../assets/stomach.png';
import blood from '../../assets/blood.png';
import emergency from '../../assets/emergency.png';
import labour from '../../assets/labour.png';
import xray from '../../assets/xray.png';
import pharmacy from '../../assets/pharmacy.png';
import acrooms from '../../assets/ac.png';
import echoandtmt from '../../assets/tmt.png';

let cssClassName = "Home";

class Home extends Component {

    pushAbout = () => {
        this.props.history.push('/about');
    }

    render() {

        let titlebox = <Fragment>
            <p>LOCATION</p><br /><br />
            <span>CHETANA HOSPITAL<br /></span><span className="mini">Opp. Venkateshwara Temple, N.H. 206,<br />B.H. Road,  KADUR-577 548.</span>
        </Fragment>

        return <div className={cssClassName}>
            <Section title="ABOUT">
                <p className={cssClassName+'info'}>
                    Chetana Hospital was started in the year 1993. It was the brainchild of Dr N Chandrashekar, renowned senior consultant physician. The hospital was started with motto of “Quality and affordable healthcare”.<br /><br />
                    Chetana Hospital initially started with department of medicine and has since gradually expanded to incorporate other specialties. To mark 25 years of excellent service in health sector a new multispecialty hospital was started in the year 2018. The state of the art new facility is a multispecialty hospital with round the clock services.<br /><br />
                    Chetana Hospital has the credit of being the only hospital in private sector in Kadur with a blood bank. It is also the first and only hospital in kadur with facilities for T.M.T and Echocardiography. Today Chetana Hospital is a referral centre for all the primary care centers in and around Kadur.<br /><br />
                </p>
                <button onClick={() => this.pushAbout()}>Know More</button>
            </Section>
            <Section title="SPECIALIZATION" bottom="32" isGreen>
                <div className={cssClassName+'icons'}>
                    <IconWithTag image={heart} tag="Cardiology" top="11"/>
                    <IconWithTag image={lungs} tag="Pulmonology" top="23"/>
                    <IconWithTag image={brain} tag="Neurology" />
                    <IconWithTag image={kidneys} tag="Nephrology" />
                    <IconWithTag image={stomach} tag="Gastroenterology" width="150"/>
                </div>
            </Section>
            <Section title="FACILITIES" bottom="16">
                <div className={cssClassName+'icons'}>
                    <IconWithTag image={blood} tag="BloodBank" percent="70"/>
                    <IconWithTag image={emergency} tag="Emergency"/>
                    <IconWithTag image={labour} tag="Labour" percent="100" top="31"/>
                    <IconWithTag image={xray} tag="Xray" percent="60"/>
                    <IconWithTag image={pharmacy} tag="Pharmacy" percent="100" top="23"/>
                    <IconWithTag image={acrooms} tag="AC Rooms" top="32"/>
                    <IconWithTag image={echoandtmt} tag="ECHO/TMT" top="32"/>
                </div>
            </Section>
            <Section titlebox={titlebox} isGreen>
                <div className="HomeMaps">
                    <Maps 
                        isMarkerShown
                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB1vGpq5aBDaq9YYV0gNeB2weTYFgUPLZY&v=3.exp&libraries=geometry,drawing,places"
                        loadingElement={<div style={{ height: `400px`}} />}
                        containerElement={<div style={{ height: `400px`}} />}
                        mapElement={<div style={{ height: `400px`}} />}
                    />
                </div>
            </Section>
        </div>;
    }
}

export default withRouter(Home);