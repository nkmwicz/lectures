import flip from "@turf/flip";
import { useRecoilState, atom } from "recoil";
import { useEffect } from "react";

export const map1900State = atom({
  key: "map1900State",
  default: [],
});

export function useMap1900() {
  const [map1900, setMap1900] = useRecoilState(map1900State);
  useEffect(() => {
    async function getMap() {
      try {
        if (map1900.length === 0) {
          const res1900 = await fetch(
            "https://raw.githubusercontent.com/aourednik/historical-basemaps/master/geojson/world_1900.geojson"
          );
          const data1900raw = await res1900.json();
          const data1900 = data1900raw.features.map((feature) => flip(feature));
          setMap1900(data1900);
        }
      } catch (error) {
        console.log(error.message);
      }
    }
    getMap();
  }, []);
  return map1900;
}
