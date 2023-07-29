import React from "react";
import { PageTemplate } from "../components/PageTemplate";
import { Helmet } from "react-helmet-async";

export function Intro() {
  return (
    <>
      <Helmet>
        <title>Introduction Lecture: Digital History</title>
        <meta
          name="description"
          content="Introductory presentation to HST 306: Digital History taught by Dr. Nathan Michalewicz at Queens University of Charlotte. "
        />
      </Helmet>
      <PageTemplate url="https://raw.githubusercontent.com/nkmwicz/teach-lectures/master/digital-history/01-intro.json" />
    </>
  );
}
