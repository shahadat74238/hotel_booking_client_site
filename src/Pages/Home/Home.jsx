import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Gallery from "./Gallery";
import Services from "./Services";
import GoogleMap from "./GoogleMap";
import FeatureRoom from "./FeatureRoom";
import Team from "../About/Team";

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
            <Team />
            <GoogleMap />
        </div>
    );
};

export default Home;