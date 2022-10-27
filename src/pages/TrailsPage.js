import { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

const TrailsPage = () => {
    const { isLoaded } = useLoadScript({ googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY });

    if (!isLoaded) return <div>Loading...</div>
    return <Map />;
}

const Map = () => {
    const center = useMemo(() => ({ lat: 35.14, lng: -85.35 }), []);

    return (
    <GoogleMap 
        zoom={10.5} 
        center={center} mapContainerClassName="map-container"
    >
        <MarkerF 
        position={{ lat: 35.12642, lng: -85.21519 }}
        label="Greenway Farms"
        />
        <MarkerF 
        position={{ lat: 35.15015, lng: -85.37023 }}
        label="Edward's Point Overlook" />
        <MarkerF 
        position={{ lat: 35.17112, lng: -85.11992 }}
        label="Bay Point Loop" />
        <MarkerF 
        position={{ lat: 35.30196, lng: -85.16669 }}
        label="Big Soddy Creek" />
        <MarkerF 
        position={{ lat: 35.18252, lng: -85.67617 }}
        label="Foster Falls" />
        <MarkerF 
        position={{ lat: 35.01032, lng: -85.36463 }}
        label="Reflection Riding Arboretum" />
    </GoogleMap>
    )
}

export default TrailsPage;