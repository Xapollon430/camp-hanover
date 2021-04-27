import L from "leaflet";
import { useRef, useEffect } from "react";
import "./Location.css";

const Location = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const mymap = L.map(mapRef.current).setView([37.6068013, -77.2098211], 10);

    var marker = L.marker([37.6068013, -77.2098211]).addTo(mymap);
    marker
      .bindPopup("3163 Parsleys Mill Road Mechanicsville, VA 23111")
      .openPopup();

    L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
    ).addTo(mymap);
  }, []);

  return <div className="map" ref={mapRef}></div>;
};

export default Location;
