import Map, {NavigationControl, Marker} from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const LeafletMap = () => {
  return (
    <div className='container mx-auto px-5'>
      <Map mapLib={maplibregl} 
        initialViewState={{
          longitude: 89.37108,
          latitude: 24.85098,
          zoom: 14
        }}
        style={{width: "100%", height: " calc(100vh - 77px)"}}
        mapStyle="https://api.maptiler.com/maps/streets/style.json?key=6wNGxRfvTtOMfvtAEjPz"
      >
        <NavigationControl position="top-left" />
        <Marker longitude={89.37108} latitude={24.85098} color='#61dbfb' />
      </Map>
    </div>
  );
};

export default LeafletMap;
