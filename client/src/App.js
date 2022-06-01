import "./App.css";
import ProfileList from "./components/ProfileList";
import AddProfile from "./components/AddProfile";

function App() {
    return (
        <div className="App">
            <header className="header">
                <h1>Kiddyup - meet other parents</h1>
            </header>
            <AddProfile />
            <ProfileList />
        </div>
    );
}

export default App;
