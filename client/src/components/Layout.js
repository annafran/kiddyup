import { Link, Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <header className="header">
                <h1>Kiddyup - meet other parents</h1>
            </header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/profiles">Profiles</Link>
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
