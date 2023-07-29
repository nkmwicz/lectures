import React from "react";
import { Route, Routes } from "react-router-dom";
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
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/digital-history" element={<DigitalHistory />} />
      <Route path="/internet-history" element={<InternetHistory />} />
      <Route path="/narratives-and-seo" element={<NarrativesSEO />} />
      <Route path="/traditional-and-digital" element={<TradVDigital />} />
      <Route path="/open-source-data" element={<OpenSourceData />} />
      <Route path="/git-and-github" element={<GitAndGitHub />} />
      <Route path="/datasets-databases" element={<DatasetsDatabases />} />
      <Route path="/postgresql-startup" element={<PostgresqlStartup />} />
      <Route path="/postgresql-design" element={<PostgresqlDesign />} />
      <Route path="/postgresql-queries" element={<PostgresqlQueries />} />
      <Route path="/postgresql-and-tableau" element={<Tableau />} />
      <Route path="/ocr-text-search" element={<OCRTextSearch />} />
      <Route path="/text-analysis-with-voyant" element={<Voyant />} />
      <Route path="/timelines" element={<Timelines />} />
      <Route path="/spatial-analysis" element={<SpatialAnalysis />} />
      <Route path="/storymaps" element={<StoryMaps />} />
      <Route path="/palladio-maps" element={<PalladioMaps />} />
      <Route path="/palladio-networks" element={<PalladioNetworks />} />
      <Route path="/digital-public-history" element={<PublicDigital />} />
      <Route path="/omeka-1" element={<Omeka1 />} />
      <Route path="/omeka-2" element={<Omeka2 />} />
      <Route path="/crowdsourcing-history" element={<Crowdsourcing />} />
      <Route path="/video-games-and-history" element={<Videogames />} />
    </Routes>
  );
}
