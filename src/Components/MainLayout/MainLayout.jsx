import { Outlet } from "react-router-dom";
import Navbar from "../Navber/Navbar";
import Footer from "../Footer/Footer";

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;