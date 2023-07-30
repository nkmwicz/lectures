import { PageTemplate } from "ui";
import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

export function Omeka2({ slide, setSlides }) {
  return (
    <>
      <Helmet>
        <title>Omeka, Part II</title>
        <meta
          name="description"
          content="A presentation expanding on Omeka for Digital Public History for the Digital History course at Queens University of Charlotte."
        />
        <meta
          name="keywords"
          content="Omeka, digital public history, digital history."
        />
      </Helmet>
      <PageTemplate
        url="https://raw.githubusercontent.com/nkmwicz/teach-lectures/master/digital-history/22-omeka2.json"
        slide={slide}
        setSlides={setSlides}
      />
    </>
  );
}

Omeka2.propTypes = {
  slide: PropTypes.object,
  setSlides: PropTypes.func.isRequired,
};
