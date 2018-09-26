
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

let cssClassName = "Features";

class Features extends Component {
    render() {
        return <div className={cssClassName}>
            <Feature image={blood} title="BloodBank Services" subtext="Morbi in sem quis dui placerat ornare" 
                body="Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies 
                porta urna.Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. 
                Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus."/>
            <Feature image={emergency} title="24/7 Emergency Services" subtext="Morbi in sem quis dui placerat ornare" 
                body="Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies 
                porta urna.Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. 
                Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus." isGreen/>
            <Feature image={labour} title="24/7 Labour Services" subtext="Morbi in sem quis dui placerat ornare" 
                body="Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies 
                porta urna.Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. 
                Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus." width="60"/>
            <Feature image={xray} title="Digital Xray Lab" subtext="Morbi in sem quis dui placerat ornare" 
                body="Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies 
                porta urna.Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. 
                Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus." isGreen/>
            <Feature image={pharmacy} title="In-House Pharmacy" subtext="Morbi in sem quis dui placerat ornare" 
                body="Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies 
                porta urna.Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. 
                Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus."/>
        </div>;
    }
}

export default Features;