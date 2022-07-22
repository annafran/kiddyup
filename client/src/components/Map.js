import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";

const Map = () => {
  const [center] = useState({ lat: -40.9006, lng: 174.886 });
  const [zoom] = useState(1);
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
    <div style={{ height: "90vh", width: "100%" }}>
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
