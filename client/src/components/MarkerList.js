import React, { useEffect, useState } from "react";
import Marker from "./Marker";

const MarkerList = () => {
  const [profiles, setProfiles] = useState([]);
  useEffect(() => {
    const getProfiles = async () => {
      const response = await fetch("http://localhost:5002/profiles");
      const data = await response.json();
      setProfiles(data);
    };
    getProfiles();
  }, []);

  return profiles.map((profile) => {
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
  });
};

export default MarkerList;
