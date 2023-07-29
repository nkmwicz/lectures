import React from "react";
import { PageTemplate } from "../components/PageTemplate";
import { Helmet } from "react-helmet-async";

export function Timelines() {
  return (
    <>
      <Helmet>
        <title>Timelines</title>
        <meta
          name="description"
          content="A presentation introducing timelines for the Digital History course at Queens University of Charlotte."
        />
        <meta name="keywords" content="Timelines, digital history." />
      </Helmet>
      <PageTemplate url="https://raw.githubusercontent.com/nkmwicz/teach-lectures/master/digital-history/15-timelines.json" />
    </>
  );
}
