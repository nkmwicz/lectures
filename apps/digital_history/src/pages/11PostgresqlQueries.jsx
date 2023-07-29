import React from "react";
import { PageTemplate } from "../components/PageTemplate";
import { Helmet } from "react-helmet-async";

export function PostgresqlQueries() {
  return (
    <>
      <Helmet>
        <title>PostgreSQL Queries</title>
        <meta
          name="description"
          content="A presentation on querying and viewing PostgreSQL data with and without DBeaver for the Digital History course at Queens University of Charlotte."
        />
      </Helmet>
      <PageTemplate url="https://raw.githubusercontent.com/nkmwicz/teach-lectures/master/digital-history/11-postgresql-queries.json" />
    </>
  );
}
