import React from "react";
import { PageTemplate } from "../components/PageTemplate";
import { Helmet } from "react-helmet-async";

export function Omeka1() {
  return (
    <>
      <Helmet>
        <title>Omeka, Part I</title>
        <meta
          name="description"
          content="A presentation introducing Omeka for Digital Public History for the Digital History course at Queens University of Charlotte."
        />
        <meta
          name="keywords"
          content="Omeka, digital public history, digital history."
        />
      </Helmet>
      <PageTemplate url="https://raw.githubusercontent.com/nkmwicz/teach-lectures/master/digital-history/21-omeka1.json" />
    </>
  );
}
