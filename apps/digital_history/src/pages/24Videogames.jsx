import React from "react";
import { PageTemplate } from "../components/PageTemplate";
import { Helmet } from "react-helmet-async";

export function Videogames() {
  return (
    <>
      <Helmet>
        <title>History with Video Games</title>
        <meta
          name="description"
          content="A presentation on historical videogames for the Digital History course at Queens University of Charlotte."
        />
        <meta name="keywords" content="video games, digital history." />
      </Helmet>
      <PageTemplate url="https://raw.githubusercontent.com/nkmwicz/teach-lectures/master/digital-history/24-videogames.json" />
    </>
  );
}
