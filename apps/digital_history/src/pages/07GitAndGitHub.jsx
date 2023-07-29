import React from "react";
import { PageTemplate } from "../components/PageTemplate";
import { Helmet } from "react-helmet-async";

export function GitAndGitHub() {
  return (
    <>
      <Helmet>
        <title>Git & GitHub</title>
        <meta
          name="description"
          content="A presentation on source control, Git, and GitHub for the Digital History course at Queens University of Charlotte."
        />
      </Helmet>
      <PageTemplate url="https://raw.githubusercontent.com/nkmwicz/teach-lectures/master/digital-history/07-git-and-github.json" />
    </>
  );
}
