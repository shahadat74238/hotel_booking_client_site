import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Gallery from "./Gallery";
import Services from "./Services";
import FeatureRoom from "./FeatureRoom";
import Team from "../About/Team";
import LeafletMap from "./LeafletMap";

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
            <LeafletMap />
        </div>
    );
};

export default Home;