import { useRecoilState, useRecoilValue } from "recoil";
import { map1900State, map1914State, mapCenterState, slideState } from "ui";
import { Polygon, Popup, useMap } from "react-leaflet";
import { useEffect, useMemo } from "react";
import { LeafletMapGlobalBorders } from "./LeafletMapGlobalBorders";

export function LeafletMapBorders() {
  const map1900 = useRecoilValue(map1900State);
  const map1914 = useRecoilValue(map1914State);
  const slide = useRecoilValue(slideState);
  const [mapCenter, setMapCenter] = useRecoilState(mapCenterState);
  const map = useMap();
  function handleFlyToEnd() {
    setMapCenter(slide.mapCenter);
  }

  useEffect(() => {
    if (slide.mapCenter) {
      if (slide.zoom && slide.mapCenter) {
        map.flyTo(slide.mapCenter, slide.zoom, {
          onEnd: handleFlyToEnd(),
        });
      }
      if (!slide.zoom && slide.mapCenter) {
        map.flyTo(slide.mapCenter, map.getZoom(), {
          onEnd: handleFlyToEnd(),
        });
      }
    }
  }, [slide.mapCenter]);

  const mapStateLookup = {
    1900: map1900,
    1914: map1914,
  };

  const mapState = mapStateLookup[slide.year] || map1900;

  return (
    <>
      <LeafletMapGlobalBorders mapState={mapState} slide={slide} />
    </>
  );
}
