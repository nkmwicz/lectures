import { useRecoilState, useRecoilValue } from "recoil";
import { allSlidesState, mapCenterState } from "ui";
import { useEffect } from "react";

export function useMapCenterOfFirstMap() {
  const [mapCenter, setMapCenter] = useRecoilState(mapCenterState);
  const theSlides = useRecoilValue(allSlidesState);

  useEffect(() => {
    const firstMapCenter = theSlides.find((slide) => {
      return slide.hasOwnProperty("mapCenter");
    });
    if (firstMapCenter) {
      setMapCenter(firstMapCenter.mapCenter);
    }
  }, [theSlides]);

  return mapCenter;
}
