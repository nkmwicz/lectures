import React from "react";
import { PageTemplate } from "../components/PageTemplate";
import { Helmet } from "react-helmet-async";

export function Omeka2() {
  return (
    <>
      <Helmet>
        <title>Omeka, Part II</title>
        <meta
          name="description"
          content="A presentation expanding on Omeka for Digital Public History for the Digital History course at Queens University of Charlotte."
        />
        <meta
          name="keywords"
          content="Omeka, digital public history, digital history."
        />
      </Helmet>
      <PageTemplate url="https://raw.githubusercontent.com/nkmwicz/teach-lectures/master/digital-history/22-omeka2.json" />
    </>
  );
}
