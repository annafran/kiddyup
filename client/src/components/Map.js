import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import MarkerList from "./MarkerList";

const Map = (props) => {
  const [center, setCenter] = useState({ lat: -40.9006, lng: 174.886 });
  const [zoom, setZoom] = useState(12);

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.GOOGLE_MAPS_REACT_API_KEY,
        }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <MarkerList />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
