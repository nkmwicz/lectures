import { MapContainer, Polygon, Popup, useMap } from "react-leaflet";
import { useRecoilValue } from "recoil";
import { map1900State, map1914State, slideState } from "ui";
import { MapLabel } from "../MapLabel";
import { LeafletMapBorders } from "./LeafletMapBorders";
import { MapKey } from "../MapKey";
import { LeafletMapLatLngIndicator } from "./LeafletMapLatLngIndicator";
import "leaflet/dist/leaflet.css";

export function LeafletMap({ mapCenter }) {
  const slide = useRecoilValue(slideState);
  const mapStyles = {
    height: "100%",
    width: "100%",
  };

  return (
    <>
      <MapContainer center={mapCenter} style={mapStyles} zoom={5}>
        <LeafletMapBorders />
        <MapKey />
        <LeafletMapLatLngIndicator />
      </MapContainer>
      <MapLabel />
    </>
  );
}
