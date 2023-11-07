/* eslint-disable react/prop-types */
import GoogleMapReact from "google-map-react";
import { googleApiKey } from "./googleApiKey";
import { FaMapMarkerAlt } from "react-icons/fa";

const AnyReactComponent = () => (
  <div>
    <FaMapMarkerAlt className="text-2xl text-red-700"/>
  </div>
);

const GoogleMap = () => {
  const defaultProps = {
    center: {
      lat: 24.85098,
      lng: 89.37108,
    },
    zoom: 14,
  };

  return (
    <div>
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: googleApiKey }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent lat={24.85098} lng={89.37108} text="My Marker" />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default GoogleMap;
