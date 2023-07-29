import React from "react";
import { PageTemplate } from "../components/PageTemplate";
import { Helmet } from "react-helmet-async";

export function PalladioMaps() {
  return (
    <>
      <Helmet>
        <title>Maps with Palladio</title>
        <meta
          name="description"
          content="A presentation on Spatial Analysis usint Palladio for the Digital History course at Queens University of Charlotte."
        />
        <meta
          name="keywords"
          content="Story Analysis, maps, Palladio, digital history."
        />
      </Helmet>
      <PageTemplate url="https://raw.githubusercontent.com/nkmwicz/teach-lectures/master/digital-history/18-palladio-maps.json" />
    </>
  );
}
