// MapComponent.js

import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';
import L from 'leaflet';
import './Style/MapStyle.css';
import WeatherComponent from './MapWeatherComponent';
import { FaMapMarkerAlt } from "react-icons/fa";

 
// Fixing leaflet's default icon issue with Webpack
L.Icon.Default.mergeOptions({
  iconRetinaUrl: (require('leaflet/dist/images/marker-icon-2x.png')).default,
  iconUrl: (require('leaflet/dist/images/marker-icon.png')).default,
  shadowUrl: (require('leaflet/dist/images/marker-shadow.png')).default,
});


const LocationMarker = ({ setCoordinates }) => {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    click(e) {
      setPosition(e.latlng);
      setCoordinates(e.latlng); // Set the coordinates in the parent component
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup  icon={<FaMapMarkerAlt />}>
        Latitude: {position.lat}, Longitude: {position.lng}
      </Popup>
    </Marker>
  );
};

const MapComponent = () => {
  const [location, setLocation] = useState({ lat: 11.0168, lng: 76.9558 });
  const [zoom, setZoom] = useState(13);
  const [coordinates, setCoordinates] = useState({ lat: 11.0168, lng: 76.9558 });

  useEffect(() => {
    // Example API call to fetch data
    axios.get('https://api.example.com/location')
      .then(response => {
        const data = response.data;
        setLocation({ lat: data.latitude, lng: data.longitude });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
      <div className='HeaderClass'>CSS LeafLet Map</div>

      {coordinates && (<WeatherComponent lat={coordinates.lat} lon={coordinates.lng} /> )}

        <div className='todo-container'>
        <MapContainer center={location} zoom={zoom} style={{ height: '70vh', width: '102vh' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <LocationMarker setCoordinates={setCoordinates} />
        </MapContainer>
     
   
        </div>
    </>
  );
}

export default MapComponent;
