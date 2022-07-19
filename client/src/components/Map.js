import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import { Link } from "react-router-dom";
import "./Marker.css";

const Marker = ({ image, alt, link }) => {
  return (
    <div>
      <img
        className="marker"
        src={image}
        alt={alt}
        component={Link}
        to={link}
      />
    </div>
  );
};

const Map = () => {
  const [center, setCenter] = useState({ lat: -40.9006, lng: 174.886 });
  const [zoom, setZoom] = useState(1);
  const [profiles, setProfiles] = useState([]);
  useEffect(() => {
    const getProfiles = async () => {
      const response = await fetch("http://localhost:5002/profiles");
      const data = await response.json();
      setProfiles(data);
    };
    getProfiles();
  }, []);

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
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
            />
          );
        })}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
