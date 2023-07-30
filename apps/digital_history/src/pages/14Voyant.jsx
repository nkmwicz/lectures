import { PageTemplate } from "ui";
import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

export function Voyant({ slide, setSlides }) {
  return (
    <>
      <Helmet>
        <title>Text Analysis with Voyant</title>
        <meta
          name="description"
          content="A presentation on text analysis with Voyant for the Digital History course at Queens University of Charlotte."
        />
      </Helmet>
      <PageTemplate
        url="https://raw.githubusercontent.com/nkmwicz/teach-lectures/master/digital-history/14-voyant.json"
        slide={slide}
        setSlides={setSlides}
      />
    </>
  );
}

Voyant.propTypes = {
  slide: PropTypes.object.isRequired,
  setSlides: PropTypes.func.isRequired,
};
