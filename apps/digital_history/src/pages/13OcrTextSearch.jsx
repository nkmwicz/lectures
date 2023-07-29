import React from "react";
import { PageTemplate } from "../components/PageTemplate";
import { Helmet } from "react-helmet-async";

export function OCRTextSearch() {
  return (
    <>
      <Helmet>
        <title>OCR, Text Search, & Google Ngrams</title>
        <meta
          name="description"
          content="A presentation on OCR, Text Search, & Google Ngrams for the Digital History course at Queens University of Charlotte."
        />
      </Helmet>
      <PageTemplate url="https://raw.githubusercontent.com/nkmwicz/teach-lectures/master/digital-history/13-ocr.json" />
    </>
  );
}
