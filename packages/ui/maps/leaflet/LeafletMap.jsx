import { MapContainer, Polygon, Popup, useMap } from "react-leaflet";
import { useRecoilValue } from "recoil";
import { map1900State, map1914State, slideState } from "./globalState";
import { MapLabel } from "../MapLabel";
import { LeafletMapBorders } from "./LeafletMapBorders";
import { MapKey } from "../MapKey";
import { LeafletMapLatLngIndicator } from "./LeafletMapLatLngIndicator";

export function LeafletMap({ mapCenter }) {
  const slide = useRecoilValue(slideState);

  return (
    <>
      <MapContainer center={mapCenter} className="mymap" zoom={5}>
        <LeafletMapBorders />
        <MapKey />
        <LeafletMapLatLngIndicator />
      </MapContainer>
      <MapLabel />
    </>
  );
}
