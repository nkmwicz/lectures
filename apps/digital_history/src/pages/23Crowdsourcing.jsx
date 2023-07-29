import React from "react";
import { PageTemplate } from "../components/PageTemplate";
import { Helmet } from "react-helmet-async";

export function Crowdsourcing() {
  return (
    <>
      <Helmet>
        <title>Crowdsourcing History</title>
        <meta
          name="description"
          content="A presentation on Crowdsourcing history for the Digital History course at Queens University of Charlotte."
        />
        <meta name="keywords" content="crowdsourcing, digital history." />
      </Helmet>
      <PageTemplate url="https://raw.githubusercontent.com/nkmwicz/teach-lectures/master/digital-history/23-crowdsourcing.json" />
    </>
  );
}
