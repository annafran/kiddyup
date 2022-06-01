import { Routes, Route } from "react-router-dom";
import "./App.css";
import ProfileList from "./components/ProfileList";
import AddProfile from "./components/AddProfile";
import Layout from "./components/Layout";
import Home from "./components/Home";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="profiles" element={<ProfileList />} />
                    <Route path="signup" element={<AddProfile />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
