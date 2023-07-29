import React from "react";
import { PageTemplate } from "../components/PageTemplate";
import { Helmet } from "react-helmet-async";

export function Tableau() {
  return (
    <>
      <Helmet>
        <title>Visualizing PostgreSQL data with Tableau</title>
        <meta
          name="description"
          content="A presentation on visualzing PostgreSQL data with Tableau for the Digital History course at Queens University of Charlotte."
        />
      </Helmet>
      <PageTemplate url="https://raw.githubusercontent.com/nkmwicz/teach-lectures/master/digital-history/12-tableau.json" />
    </>
  );
}
