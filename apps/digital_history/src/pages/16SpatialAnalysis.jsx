import React from "react";
import { PageTemplate } from "../components/PageTemplate";
import { Helmet } from "react-helmet-async";

export function SpatialAnalysis() {
  return (
    <>
      <Helmet>
        <title>Spatial Analysis Introduction</title>
        <meta
          name="description"
          content="A presentation introducing spatial analysis for the Digital History course at Queens University of Charlotte."
        />
        <meta name="keywords" content="spatial analysis, digital history." />
      </Helmet>
      <PageTemplate url="https://raw.githubusercontent.com/nkmwicz/teach-lectures/master/digital-history/16-spatial-analysis.json" />
    </>
  );
}
