import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix default icon issue for Leaflet in React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
});

const munichPosition = [48.1351, 11.5820]; // Latitude, Longitude of Munich

const LocationMap = () => {
    return (
        <div className="map-container" style={{ width: '100%', height: '300px', borderRadius: '20px', overflow: 'hidden' }}>
            <MapContainer center={munichPosition} zoom={13} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                />
                <Marker position={munichPosition} icon={L.divIcon({
                    className: 'custom-marker',
                    iconSize: [24, 24],
                })}>
                    <Popup>Munich – Available place</Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default LocationMap;
