import { PageTemplate } from "ui";
import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

export function OCRTextSearch({ slide, setSlides }) {
  return (
    <>
      <Helmet>
        <title>OCR, Text Search, & Google Ngrams</title>
        <meta
          name="description"
          content="A presentation on OCR, Text Search, & Google Ngrams for the Digital History course at Queens University of Charlotte."
        />
      </Helmet>
      <PageTemplate
        url="https://raw.githubusercontent.com/nkmwicz/teach-lectures/master/digital-history/13-ocr.json"
        slide={slide}
        setSlides={setSlides}
      />
    </>
  );
}

OCRTextSearch.propTypes = {
  slide: PropTypes.object,
  setSlides: PropTypes.func.isRequired,
};
