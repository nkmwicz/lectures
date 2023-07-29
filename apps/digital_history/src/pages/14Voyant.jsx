import React from "react";
import { PageTemplate } from "../components/PageTemplate";
import { Helmet } from "react-helmet-async";

export function Voyant() {
  return (
    <>
      <Helmet>
        <title>Text Analysis with Voyant</title>
        <meta
          name="description"
          content="A presentation on text analysis with Voyant for the Digital History course at Queens University of Charlotte."
        />
      </Helmet>
      <PageTemplate url="https://raw.githubusercontent.com/nkmwicz/teach-lectures/master/digital-history/14-voyant.json" />
    </>
  );
}
