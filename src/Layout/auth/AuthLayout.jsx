import { Outlet } from "react-router";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar></Navbar>
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AuthLayout;
