import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar.jsx";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
