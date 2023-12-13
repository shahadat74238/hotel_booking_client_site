import { Outlet } from "react-router-dom";
import Navbar from "../Navber/Navbar";
import Footer from "../Footer/Footer";
import Social from "../Social/Social";

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
            <div className="fixed z-10">
                <Social />
            </div>
        </div>
    );
};

export default MainLayout;