
import React from 'react';
import {GoogleMap, Marker, withGoogleMap, withScriptjs} from 'react-google-maps';

const Maps = withScriptjs(withGoogleMap((props) => (
    <GoogleMap
        defaultZoom={15}
        defaultCenter={{ lat: 13.5464562, lng: 76.0187962 }}>
        {props.isMarkerShown && <Marker title="Chetana Specialty Hospital" position={{ lat: 13.5464562, lng: 76.0187962 }} />}
    </GoogleMap>
)));

export default Maps;