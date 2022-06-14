import { Outlet } from "react-router-dom";
import HeaderBar from "./HeaderBar";

const Layout = () => {
  return (
    <>
      <HeaderBar />
      <Outlet />
    </>
  );
};
export default Layout;
