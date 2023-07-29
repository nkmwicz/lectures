import React from "react";
import { PageTemplate } from "../components/PageTemplate";
import { Helmet } from "react-helmet-async";

export function PublicDigital() {
  return (
    <>
      <Helmet>
        <title>Public Digital History</title>
        <meta
          name="description"
          content="A presentation introducing Public Digital History for the Digital History course at Queens University of Charlotte."
        />
        <meta
          name="keywords"
          content="Public Digital History, digital history."
        />
      </Helmet>
      <PageTemplate url="https://raw.githubusercontent.com/nkmwicz/teach-lectures/master/digital-history/20-public-digital.json" />
    </>
  );
}
