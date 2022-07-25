import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import ProfileList from "./components/ProfileList";
import AddProfile from "./components/AddProfile";
import Layout from "./components/Layout";
import Home from "./components/Home";
import ProfilePage from "./components/ProfilePage";
import Map from "./components/Map";

function App() {
  const [center, setCenter] = useState({ lat: -40.9006, lng: 174.886 });
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="profiles"
            element={<ProfileList setCenter={setCenter} />}
          />
          <Route path="map" element={<Map center={center} />} />
          <Route path="signup" element={<AddProfile />} />
          <Route path="profiles/:id" element={<ProfilePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
