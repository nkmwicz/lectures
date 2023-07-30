import { PageTemplate } from "ui";
import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

export function SpatialAnalysis({ slide, setSlides }) {
  return (
    <>
      <Helmet>
        <title>Spatial Analysis Introduction</title>
        <meta
          name="description"
          content="A presentation introducing spatial analysis for the Digital History course at Queens University of Charlotte."
        />
        <meta name="keywords" content="spatial analysis, digital history." />
      </Helmet>
      <PageTemplate
        url="https://raw.githubusercontent.com/nkmwicz/teach-lectures/master/digital-history/16-spatial-analysis.json"
        slide={slide}
        setSlides={setSlides}
      />
    </>
  );
}

SpatialAnalysis.propTypes = {
  slide: PropTypes.object,
  setSlides: PropTypes.func.isRequired,
};
