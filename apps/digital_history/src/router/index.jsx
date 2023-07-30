import { Route, Routes } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { slideState, allSlidesState } from "../components/globalState";

import { Intro } from "../pages/01Intro";
import { DigitalHistory } from "../pages/02DigitalHistory";
import { InternetHistory } from "../pages/03InternetHistory";
import { NarrativesSEO } from "../pages/04NarrativesSEO";
import { TradVDigital } from "../pages/05TradVDigital";
import { OpenSourceData } from "../pages/06OpenSourceData";
import { GitAndGitHub } from "../pages/07GitAndGitHub";
import { DatasetsDatabases } from "../pages/08DatasetsDatabases";
import { PostgresqlStartup } from "../pages/09PostgresqlStartup";
import { PostgresqlDesign } from "../pages/10PostgresqlDesign";
import { PostgresqlQueries } from "../pages/11PostgresqlQueries";
import { Tableau } from "../pages/12Tableau";
import { OCRTextSearch } from "../pages/13OcrTextSearch";
import { Voyant } from "../pages/14Voyant";
import { Timelines } from "../pages/15Timelines";
import { SpatialAnalysis } from "../pages/16SpatialAnalysis";
import { StoryMaps } from "../pages/17Storymaps";
import { PalladioMaps } from "../pages/18PalladioMaps";
import { PalladioNetworks } from "../pages/19PalladioNetworks";
import { PublicDigital } from "../pages/20PublicDigital";
import { Omeka1 } from "../pages/21Omeka1";
import { Omeka2 } from "../pages/22-omeka2";
import { Crowdsourcing } from "../pages/23Crowdsourcing";
import { Videogames } from "../pages/24Videogames";

export function Router() {
  const slide = useRecoilValue(slideState);
  // eslint-disable-next-line no-unused-vars
  const [allSlides, setAllSlides] = useRecoilState(allSlidesState);

  return (
    <Routes>
      <Route
        path="/"
        element={<Intro slide={slide} setSlides={setAllSlides} />}
      />
      <Route
        path="/digital-history"
        element={<DigitalHistory slide={slide} setSlides={setAllSlides} />}
      />
      <Route
        path="/internet-history"
        element={<InternetHistory slide={slide} setSlides={setAllSlides} />}
      />
      <Route
        path="/narratives-and-seo"
        element={<NarrativesSEO slide={slide} setSlides={setAllSlides} />}
      />
      <Route
        path="/traditional-and-digital"
        element={<TradVDigital slide={slide} setSlides={setAllSlides} />}
      />
      <Route
        path="/open-source-data"
        element={<OpenSourceData slide={slide} setSlides={setAllSlides} />}
      />
      <Route
        path="/git-and-github"
        element={<GitAndGitHub slide={slide} setSlides={setAllSlides} />}
      />
      <Route
        path="/datasets-databases"
        element={<DatasetsDatabases slide={slide} setSlides={setAllSlides} />}
      />
      <Route
        path="/postgresql-startup"
        element={<PostgresqlStartup slide={slide} setSlides={setAllSlides} />}
      />
      <Route
        path="/postgresql-design"
        element={<PostgresqlDesign slide={slide} setSlides={setAllSlides} />}
      />
      <Route
        path="/postgresql-queries"
        element={<PostgresqlQueries slide={slide} setSlides={setAllSlides} />}
      />
      <Route
        path="/postgresql-and-tableau"
        element={<Tableau slide={slide} setSlides={setAllSlides} />}
      />
      <Route
        path="/ocr-text-search"
        element={<OCRTextSearch slide={slide} setSlides={setAllSlides} />}
      />
      <Route
        path="/text-analysis-with-voyant"
        element={<Voyant slide={slide} setSlides={setAllSlides} />}
      />
      <Route
        path="/timelines"
        element={<Timelines slide={slide} setSlides={setAllSlides} />}
      />
      <Route
        path="/spatial-analysis"
        element={<SpatialAnalysis slide={slide} setSlides={setAllSlides} />}
      />
      <Route
        path="/storymaps"
        element={<StoryMaps slide={slide} setSlides={setAllSlides} />}
      />
      <Route
        path="/palladio-maps"
        element={<PalladioMaps slide={slide} setSlides={setAllSlides} />}
      />
      <Route
        path="/palladio-networks"
        element={<PalladioNetworks slide={slide} setSlides={setAllSlides} />}
      />
      <Route
        path="/digital-public-history"
        element={<PublicDigital slide={slide} setSlides={setAllSlides} />}
      />
      <Route
        path="/omeka-1"
        element={<Omeka1 slide={slide} setSlides={setAllSlides} />}
      />
      <Route
        path="/omeka-2"
        element={<Omeka2 slide={slide} setSlides={setAllSlides} />}
      />
      <Route
        path="/crowdsourcing-history"
        element={<Crowdsourcing slide={slide} setSlides={setAllSlides} />}
      />
      <Route
        path="/video-games-and-history"
        element={<Videogames slide={slide} setSlides={setAllSlides} />}
      />
    </Routes>
  );
}
