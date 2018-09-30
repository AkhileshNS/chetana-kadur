
// External Libraries
import React , {Component, Fragment} from 'react';

// Internal Libraries
import './About.css';
import hospital from '../../assets/hospital.png';
import entrance from '../../assets/features/ENTRANCE.jpg';
import medicalICU from '../../assets/features/MedicalIncentiveCareUnit.jpg';
import reception from '../../assets/features/RECEPTION.jpg';
import Section from '../../components/Section/Section';
import Maps from '../../Maps';

let cssClassName = "About";

class About extends Component {
    render() {

        let titlebox = <Fragment>
            <p>CHETANA HOSPITAL</p><br /><br />
            <span>Opp. Venkateshwara Temple,<br />N.H. 206,<br /></span><span>B.H. Road,  KADUR-577 548.<br /><strong>Ph.No : 08267 221553,  9449923000</strong></span>
        </Fragment>;

        return <div className={cssClassName}>
            <p>About the Hospital</p>
            <div className={cssClassName+'images'}>
                <img src={hospital} alt="Unavailable" className={cssClassName+'mainimg'}/>
                <img src={entrance} alt="Unavailable" className={cssClassName+'img'}/>
                <img src={medicalICU} alt="Unavailable" className={cssClassName+'img'}/>
                <img src={reception} alt="Unavailable" className={cssClassName+'img'}/>
            </div> <br />
            <span>Chetana Hospital was started in the year 1993. It was the brainchild of Dr N Chandrashekar, renowned senior consultant physician. The hospital was started with motto of “Quality and affordable healthcare”.<br /><br />
                Chetana Hospital initially started with department of medicine and has since gradually expanded to incorporate other specialties. To mark 25 years of excellent service in health sector a new multispecialty hospital was started in the year 2018. The state of the art new facility is a multispecialty hospital with round the clock services.<br /><br />
                Chetana Hospital has the credit of being the only hospital in private sector in Kadur with a blood bank. It is also the first and only hospital in kadur with facilities for T.M.T and Echocardiography. Today Chetana Hospital is a referral centre for all the primary care centers in and around Kadur.<br /><br />
                Chetana Hospital is also proud to be the first hospital to offer super specialty outpatient consultation in Cardiology, Neurology, Gastroenterology, Pulmonolgy, Nephrology, Urology and Cardiothoracic specialties.<br /><br />
                It is our continued commitment to provide “Quality and affordable healthcare” in the region and our team of experienced doctors and support staff are dedicated ,service oriented, highly motivated and committed to reduce the suffering of the patients and help them recover soon and lead a healthy life.
            </span>
            <Section titlebox={titlebox}>
                <Maps 
                    isMarkerShown
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB1vGpq5aBDaq9YYV0gNeB2weTYFgUPLZY&v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `400px` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `400px` }} />}
                />
            </Section>
        </div>;
    }
}

export default About;