import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Gallery from "./Gallery";
import Services from "./Services";
import GoogleMap from "./GoogleMap";

const Home = () => {
    return (
        <div className="min-h-screen ">
            <Helmet>
                <title>Five Star | Home</title>
            </Helmet>
            <Banner />
            <Services />
            <Gallery />
            <GoogleMap />
        </div>
    );
};

export default Home;