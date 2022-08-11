import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import Marker from "./Marker";
import "leaflet/dist/leaflet.css";

const accessToken = process.env.REACT_APP_MAPBOX_KEY;

const Map = ({ center, setActive }) => {
  const [zoom] = useState(5);
  const [profiles, setProfiles] = useState([]);
  useEffect(() => {
    const getProfiles = async () => {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/profiles`);
      const data = await response.json();
      setProfiles(data);
    };
    getProfiles();
  }, []);

  return (
    <div>
      <MapContainer
        center={center}
        zoom={5}
        scrollWheelZoom={false}
        style={{ height: "90vh", width: "100%" }}
      >
        <TileLayer
          attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
          url={`https://api.mapbox.com/styles/v1/annafran1/cl6oig57w003014odi62akas5/tiles/256/{z}/{x}/{y}@2x?access_token=${accessToken}`}
        />
        {profiles.map((profile) => {
          return (
            <Marker
              position={[profile.coordinates[0], profile.coordinates[1]]}
              image={profile.profilePhoto}
              alt={profile.firstName}
              link={`/profiles/${profile.id}`}
              setActive={setActive}
            />
          );
        })}
      </MapContainer>
      {/* <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.REACT_APP_API_KEY,
        }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {profiles.map((profile) => {
          return (
            <Marker
              lat={profile.coordinates[0]}
              lng={profile.coordinates[1]}
              image={profile.profilePhoto}
              alt={profile.firstName}
              link={`/profiles/${profile.id}`}
              setActive={setActive}
            />
          );
        })}
      </GoogleMapReact> */}
    </div>
  );
};

export default Map;
