import React from "react";
import { PageTemplate } from "../components/PageTemplate";
import { Helmet } from "react-helmet-async";

export function DatasetsDatabases() {
  return (
    <>
      <Helmet>
        <title>Datasets & Databases</title>
        <meta
          name="description"
          content="A presentation on Datasets and Databases for the Digital History course at Queens University of Charlotte."
        />
      </Helmet>
      <PageTemplate url="https://raw.githubusercontent.com/nkmwicz/teach-lectures/master/digital-history/08-datasets-databases.json" />
    </>
  );
}
