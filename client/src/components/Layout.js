import { Outlet } from "react-router-dom";
import HeaderBar from "./HeaderBar";

const Layout = ({ active, setActive }) => {
  return (
    <>
      <HeaderBar active={active} setActive={setActive} />
      <Outlet />
    </>
  );
};
export default Layout;
