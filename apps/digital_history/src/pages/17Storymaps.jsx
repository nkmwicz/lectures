import React from "react";
import { PageTemplate } from "../components/PageTemplate";
import { Helmet } from "react-helmet-async";

export function StoryMaps() {
  return (
    <>
      <Helmet>
        <title>Knight Lab StoryMaps</title>
        <meta
          name="description"
          content="A presentation StoryMaps using Knight Lab's software for the Digital History course at Queens University of Charlotte."
        />
        <meta
          name="keywords"
          content="Story Maps, Knight Lab, digital history."
        />
      </Helmet>
      <PageTemplate url="https://raw.githubusercontent.com/nkmwicz/teach-lectures/master/digital-history/17-storymaps.json" />
    </>
  );
}
