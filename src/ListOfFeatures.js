
import bloodbank_asset from './assets/features/BLOOD_STORAGE_CENTER.jpg';
import emergency_asset from './assets/features/OPERATION_THEATRE.jpg';
import labour_asset from './assets/features/LABOUR_ROOM.jpg';
import xray_asset from './assets/features/XRAY_MACHINE_WITH_DIGITAL_DRIVE_FILMS.jpg';
import pharmacy_asset from './assets/features/PHARMACY.jpg';
import acrooms_asset from './assets/features/ACROOMS.jpg';
import echoandtmt_asset from './assets/features/TREADMILL_TEST_MACHINE(TMT).jpg';
import echoandtmt_asset2 from './assets/features/SCANNING_AND_ECHO_ROOM_AND_COLOUR_DOPPLER.jpg';

const blood = {
    image: bloodbank_asset,
    title: "Blood Storage Center",
    body: `The Blood Storage Center was started on 2016 with the partnership of Mother Blood Bank of Rotary Blood Bank Shimoga. The Blood Storage Center has been running for ${new Date().getFullYear() - 2016} years. Capacity of holding is 60 bags per day. More than 2000 bags of service has been delivered to patients. From Arsikere to Therikere, It is the only government approved blood storage center in the kadur taluk and surrounding area. Service has also been provided to all surrounding taluks as well. Many Patients and Hospitals have reported excellent feedback for our blood related services. All blood samples are put through a series of stringent tests including HIV, Eliza and serveral others to ensure the quality of blood.`    
};

const emergency = {
    image: emergency_asset,
    title: "24/7 Emergency Services",
    body: `At Chetana, Emergency Physicians are highly educated and have training that crosses different medical specialties to meet demanding challenges. They are assisted by well-trained emergency nurses. As soon as a patient enters the department he/she is examined by a triage nurse and allotted to a zone depending on how serious he/she is. The very serious patients are immediately seen by a doctor. \n\nOur Intensive Care Units provide high chances of survival for critically ill patients. Patients are admitted to the ICU in case of life threatening situations like acute renal or liver failure, acute respiratory distress, cardiac failure, multiple organ failures, septic shock or coma. Many a time they are also admitted for close monitoring after major surgery. This move helps in stabilising the patient and reducing the chances of infection and other postoperative complications.`
};

const labour = {
    image: labour_asset,
    title: "24/7 Labour Services",
    body: `Our Labour ward is fully equipped with advanced medical facilities and doctors on hand at the time of requirement. Our highly qualified doctors in the hospital will there to look after the problems develop during labor. If patient develops any complications, a team will be there in the ward for 24 hours a day to support and care. With the healthcare professionals and supporting staffs, the ward is maintained safe and secure for the women during childbirth.\n\n Our labour ward in Chetana contains most advanced medical equipments, and epidurals are available for pain relief. These rooms are designed to make you feel more like you are at home. Our Labour Ward has birthing equipments such as birth balls or mats. \n\nThere will be an operating theatre nearby in case you need a caesarean birth, and often there's a neonatal unit in case your baby needs extra help.`
};

const xray = {
    image: xray_asset,
    title: "Digital Xray Lab",
    body: `X-Rays can be used to diagnose a range of health problems and conditions. They are an effective way of detecting bone problems, such as a fracture. They can also be used to check for problems with soft tissue, such in the lungs.\n\nAn X-Ray is usually carried out by a radiographer (someone who specialises in using imaging technology). It’s a painless test and your body will only be exposed to X-Rays for a fraction of a second.\n\nYou need to stay still during an X-Ray, as otherwise the image can become blurred. Your radiographer may need to take multiple images, from different angles.`
};

const pharmacy = {
    image: pharmacy_asset,
    title: "In-House Pharmacy",
    body: `Chetana Hospital has well designed and modern pharmacy setup. Round the clock and timely delivery of wide range of medicines. The medicines are of High Quality from reputed companies, and are stored properly. A team of highly experienced and qualified pharmacists ensures safe medication with proper information on drugs (Caution, Precaution, Do’s and Don’ts along with relevant information). The team of pharmacists provide patient counseling too.`
};

const acrooms = {
    image: acrooms_asset,
    title: "AC Rooms",
    body:  `We provide Air-conditioned rooms for our patients. Here at Chetana, we aim to provide the best comforts to our patients. Our rooms are well maintained, clean and we have nurses on standby incase any patient experiences any kind of pain or discomfort. Incase of any serious emergency, our Operating Theatre is always setup and ready to handle any kind of emergency`
};

const echoandtmt = {
    image: echoandtmt_asset,
    secImage: echoandtmt_asset2,
    title: 'ECHO/TMT (Treadmill Test)',
    body: `A stress echocardiography, also called an echocardiography stress test or stress echo, is a procedure that determines how well your heart and blood vessels are working. During a stress echocardiography, you'll exercise on a treadmill or stationary bike while your doctor monitors your blood pressure and heart rhythm.`
};

export {
    blood, emergency, labour, xray, pharmacy, acrooms, echoandtmt
};