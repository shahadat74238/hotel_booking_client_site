import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Gallery from "./Gallery";
import Services from "./Services";
import GoogleMap from "./GoogleMap";
import FeatureRoom from "./FeatureRoom";

const Home = () => {
    return (
        <div className="min-h-screen ">
            <Helmet>
                <title>Five Star | Home</title>
            </Helmet>
            <Banner />
            <Services />
            <FeatureRoom />
            <Gallery />
            <GoogleMap />
        </div>
    );
};

export default Home;