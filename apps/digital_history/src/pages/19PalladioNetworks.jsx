import React from "react";
import { PageTemplate } from "../components/PageTemplate";
import { Helmet } from "react-helmet-async";

export function PalladioNetworks() {
  return (
    <>
      <Helmet>
        <title>Networks with Palladio</title>
        <meta
          name="description"
          content="A presentation on Network Graphs using Palladio for the Digital History course at Queens University of Charlotte."
        />
        <meta
          name="keywords"
          content="Networks, Graphs, Palladio, digital history."
        />
      </Helmet>
      <PageTemplate url="https://raw.githubusercontent.com/nkmwicz/teach-lectures/master/digital-history/19-palladio-networks.json" />
    </>
  );
}
