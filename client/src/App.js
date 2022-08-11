import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import ProfileList from "./components/ProfileList";
import AddProfile from "./components/AddProfile";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import ProfilePage from "./components/ProfilePage";
import Map from "./components/Map";

const links = [
  { link: "/", label: "Home" },
  { link: "/profiles", label: "Profiles" },
  { link: "/map", label: "Map of profiles" },
  { link: "/signup", label: "Sign up" },
];

function App() {
  const [center, setCenter] = useState({ lat: -40.9006, lng: 174.886 });
  const [active, setActive] = useState(links[0].link);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Layout active={active} setActive={setActive} />}
        >
          <Route index element={<Hero setActive={setActive} />} />
          <Route
            path="profiles"
            element={<ProfileList setCenter={setCenter} />}
          />
          <Route path="map" element={<Map center={center} />} />
          <Route path="signup" element={<AddProfile setActive={setActive} />} />
          <Route path="profiles/:id" element={<ProfilePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
