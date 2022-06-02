import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import { useEffect } from "react";
import Marker from "./Marker";

const Map = (props) => {
    const [center, setCenter] = useState({ lat: -40.9006, lng: 174.886 });
    const [zoom, setZoom] = useState(12);
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
                    key: "AIzaSyC85DetR6p5fgbXdt6GFfeaHrunz_sgnXY",
                }}
                defaultCenter={center}
                defaultZoom={zoom}
            >
                {profiles.map((profile) => {
                    return (
                        <>
                            <Marker
                                key={profile.id}
                                profile={profile}
                                lat={profile.coordinates[0]}
                                lng={profile.coordinates[1]}
                            />
                        </>
                    );
                })}
            </GoogleMapReact>
        </div>
    );
};

export default Map;
