import React from "react";
import { PageTemplate } from "../components/PageTemplate";
import { Helmet } from "react-helmet-async";

export function OpenSourceData() {
  return (
    <>
      <Helmet>
        <title>Open Source & Data</title>
        <meta
          name="description"
          content="A presentation on the role of Open Source and different data types for the Digital History course at Queens University of Charlotte."
        />
      </Helmet>
      <PageTemplate url="https://raw.githubusercontent.com/nkmwicz/teach-lectures/master/digital-history/06-open-source-data.json" />
    </>
  );
}
