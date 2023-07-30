import { PageTemplate } from "ui";
import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

export function Omeka1({ slide, setSlides }) {
  return (
    <>
      <Helmet>
        <title>Omeka, Part I</title>
        <meta
          name="description"
          content="A presentation introducing Omeka for Digital Public History for the Digital History course at Queens University of Charlotte."
        />
        <meta
          name="keywords"
          content="Omeka, digital public history, digital history."
        />
      </Helmet>
      <PageTemplate
        url="https://raw.githubusercontent.com/nkmwicz/teach-lectures/master/digital-history/21-omeka1.json"
        slide={slide}
        setSlides={setSlides}
      />
    </>
  );
}

Omeka1.propTypes = {
  slide: PropTypes.object.isRequired,
  setSlides: PropTypes.func.isRequired,
};
