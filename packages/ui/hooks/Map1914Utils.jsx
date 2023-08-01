import flip from "@turf/flip";
import { useRecoilState, atom } from "recoil";
import { useEffect } from "react";

export const map1914State = atom({
  key: "map1914State",
  default: [],
});

export function useMap1914() {
  const [map1914, setMap1914] = useRecoilState(map1914State);
  useEffect(() => {
    async function getMap() {
      try {
        if (map1914.length === 0) {
          const res1914 = await fetch(
            "https://raw.githubusercontent.com/aourednik/historical-basemaps/master/geojson/world_1914.geojson"
          );
          const data1914raw = await res1914.json();
          const data1914 = data1914raw.features.map((feature) => flip(feature));
          setMap1914(data1914);
        }
      } catch (error) {
        console.log(error.message);
      }
    }
    getMap();
  }, []);
  return map1914;
}
