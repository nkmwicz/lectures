import React from "react";
import { PageTemplate } from "../components/PageTemplate";
import { Helmet } from "react-helmet-async";

export function PostgresqlDesign() {
  return (
    <>
      <Helmet>
        <title>PostgreSQL Database Design & DBeaver</title>
        <meta
          name="description"
          content="A presentation on designing, normalizing, and ingesting data into PostgreSQL with DBeaver for the Digital History course at Queens University of Charlotte."
        />
      </Helmet>
      <PageTemplate url="https://raw.githubusercontent.com/nkmwicz/teach-lectures/master/digital-history/10-postgresql-design.json" />
    </>
  );
}
