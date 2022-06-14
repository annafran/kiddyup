import { Link, Outlet } from "react-router-dom";
// import HeaderAction from "../components/Header";

const Layout = () => {
    return (
        <>
            <header className="header">
                <img src="kiddyup_logo_trans.png" alt="logo" />
                <h1>Kiddyup - meet other parents</h1>
            </header>
            {/* <HeaderAction /> */}
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/profiles">Profiles</Link>
                    </li>
                    <li>
                        <Link to="/map">Map of profiles</Link>
                    </li>
                    <li>
                        <Link to="/signup">Sign up</Link>
                    </li>
                </ul>
            </nav>
            <hr />
            <Outlet />
        </>
    );
};
export default Layout;
