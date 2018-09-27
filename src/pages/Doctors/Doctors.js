
// External Libraries
import React , {Component} from 'react';

// Internal Libraries
import './Doctors.css';
import Doctor from '../../components/Doctor/Doctor';
import Doctor1 from '../../assets/doctor1.png';
import Doctor2 from '../../assets/doctor2.png';
import Doctor3 from '../../assets/doctor3.png';

let cssClassName = "Doctors";

class Doctors extends Component {
    render() {
        return <div className={cssClassName}>
            <Doctor isGreen 
            image={Doctor1} 
            title={['Dr. N Chandrashekar','MBBS MD','Consultant Physician']} 
            body={`After completing MBBS and MD in General Medicine from the prestigious J.J.M.M college in Davangere in the year 1983 he started his service in kadur soon after. He started the Chetana Hospital in the year 1993. He as previously worked as associate professor of Medicine in J.J.M.M College Davangere.\n
            His area of special interest is Hypertension and Diabetes. Currently he is the senior most physician in the hospital with a rich experience of 35 years in the medical service to patients in and around Kadur.
            `}/>
            <Doctor reverse
            image={Doctor2} 
            title={['Dr Manoj C','MBBSM.DMRCP(U.K)','Consultant Physician']}
            body={`After completing MBBS and MD in General Medicine from the prestigious J.J.M.M college in Davangere in the year 1983 he started his service in kadur soon after. He started the Chetana Hospital in the year 1993. He as previously worked as associate professor of Medicine in J.J.M.M College Davangere.\n
            His area of special interest is Hypertension and Diabetes. Currently he is the senior most physician in the hospital with a rich experience of 35 years in the medical service to patients in and around Kadur.
            `}/>
            <Doctor isGreen 
            image={Doctor3} 
            title={['Dr. Ganesh Kumar K.R','MBBSMS(OBG)','Consultant Obstetrician & Gynecologist']}
            body={`After completing MBBS and MD in General Medicine from the prestigious J.J.M.M college in Davangere in the year 1983 he started his service in kadur soon after. He started the Chetana Hospital in the year 1993. He as previously worked as associate professor of Medicine in J.J.M.M College Davangere.\n
            His area of special interest is Hypertension and Diabetes. Currently he is the senior most physician in the hospital with a rich experience of 35 years in the medical service to patients in and around Kadur.
            `}/>
        </div>;
    }
}

export default Doctors;