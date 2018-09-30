
// External Libraries
import React , {Component} from 'react';

// Internal Libraries
import './Features.css';
import Feature from '../../components/Feature/Feature';

// Images
import blood from '../../assets/blood.png';
import emergency from '../../assets/emergency.png';
import labour from '../../assets/labour.png';
import xray from '../../assets/xray.png';
import pharmacy from '../../assets/pharmacy.png';
import acrooms from '../../assets/ac.png';
import tmt from '../../assets/tmt.png';

let cssClassName = "Features";

class Features extends Component {
    render() {
        return <div className={cssClassName}>
            <Feature 
                url="/features/blood" 
                image={blood} 
                title="Blood Storage Center" 
                subtext="Started in 2016" 
                body="The Blood Storage Center was started with the partnership of Mother Blood Bank of Rotary Blood Bank Shimoga.
                Capacity of holding is 60 bags per day. More than 2000 bags of service has been delivered to patients. 
                The only Government Authorised Blood Storage Center in Kadur Taluk and Surrounding."
            />
            <Feature 
                url="/features/emergency" 
                image={emergency} 
                title="24/7 Emergency Services" 
                subtext="Dedicated to caring for the sick in their most vulnerable state of health" 
                body="At Chetana, Emergency Physicians are highly educated and have training that crosses different medical specialties 
                to meet demanding challenges. They are assisted by well-trained emergency nurses. 
                As soon as a patient enters the department he/she is examined by a triage nurse and allotted to a zone 
                depending on how serious he/she is. The very serious patients are immediately seen by a doctor." 
                isGreen
            />
            <Feature 
                url="/features/labour" 
                image={labour} 
                title="24/7 Labour Services" 
                subtext="Labour / Normal Delivery" 
                body="Our Labour ward is fully equipped with advanced medical facilities and doctors on hand at the time of requirement.
                Our highly qualified doctors in the hospital will there to look after the problems develop during labor. If patient 
                develops any complications, a team will be there in the ward for 24 hours a day to support and care. 
                With the healthcare professionals and supporting staffs, the ward is maintained safe and secure for the women during childbirth." 
                width="75"
            />
            <Feature 
                url="/features/xray" 
                image={xray} 
                title="Digital Xray Lab" 
                subtext="X-Ray is a widely used test to examine the inside of your body" 
                body="X-Rays can be used to diagnose a range of health problems and conditions. 
                They are an effective way of detecting bone problems, such as a fracture. 
                They can also be used to check for problems with soft tissue, such in the lungs." 
                isGreen
            />
            <Feature 
                url="/features/pharmacy" 
                image={pharmacy} 
                title="In-House Pharmacy" 
                subtext="Open and Working 24/7" 
                body="Chetana Hospital has well designed and modern pharmacy setup. Round the clock and timely delivery of wide range of medicines. 
                The medicines are of High Quality from reputed companies, and are stored properly." 
                width="75"
            />
            <Feature 
                url="/features/acrooms" 
                image={acrooms} 
                title="AC Rooms" 
                subtext="Fully Air-Conditioned Rooms Available"
                body="We provide Air-conditioned rooms for our patients. Here at Chetana, we aim to provide the best comforts to our patients. 
                Our rooms are well maintained, clean and we have nurses on standby incase any patient experiences any kind of pain or discomfort.
                Incase of any serious emergency, our Operating Theatre is always setup and ready to handle any kind of emergency" 
                isGreen
            />
            <Feature 
                url="/features/echoandtmt" 
                image={tmt} 
                title="ECHO/TMT (Treadmill Test)" 
                subtext="Unique only to us in Kadur and Surrounding Taluks" 
                body="A stress echocardiography, also called an echocardiography stress test or stress echo, 
                is a procedure that determines how well your heart and blood vessels are working. During a stress echocardiography, 
                you'll exercise on a treadmill or stationary bike while your doctor monitors your blood pressure and heart rhythm." 
            />
        </div>;
    }
}

export default Features;