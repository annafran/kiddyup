import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "./Map.css";
import "leaflet/dist/leaflet.css";

const GetIcon = (profilePhoto) => {
  return L.icon({
    iconUrl: profilePhoto,
    iconSize: [40, 40],
    popupAnchor: [-10, -18],
    className: "leaflet-div-icon",
  });
};

const accessToken = process.env.REACT_APP_MAPBOX_KEY;

const Map = ({ center, setActive }) => {
  const navigate = useNavigate();
  const [profiles, setProfiles] = useState([]);
  useEffect(() => {
    const getProfiles = async () => {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/profiles`);
      const data = await response.json();
      setProfiles(data);
    };
    getProfiles();
  }, []);

  const handleClick = (linkId) => {
    setActive("/profiles");
    navigate(`/profiles/${linkId}`);
  };

  return (
    <div>
      <MapContainer
        center={center}
        zoom={4}
        scrollWheelZoom={false}
        style={{ height: "90vh", width: "100%" }}
      >
        <TileLayer
          attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
          url={`https://api.mapbox.com/styles/v1/annafran1/cl6oig57w003014odi62akas5/tiles/256/{z}/{x}/{y}@2x?access_token=${accessToken}`}
        />
        {profiles.map((profile, index) => {
          return (
            <Marker
              position={[profile.coordinates[0], profile.coordinates[1]]}
              icon={GetIcon(profile.profilePhoto)}
              key={index}
              eventHandlers={{
                mouseover: (e) => {
                  e.target.openPopup();
                },
              }}
            >
              <Popup>
                Hi I'm <strong>{profile.firstName}</strong> from{" "}
                <strong>{profile.city}</strong>. <br />
                <button
                  className="popupButton"
                  onClick={() => handleClick(profile.id)}
                >
                  Click to view my profile
                </button>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default Map;
