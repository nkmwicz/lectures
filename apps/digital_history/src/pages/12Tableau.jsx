import { PageTemplate } from "ui";
import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

export function Tableau({ slide, setSlides }) {
  return (
    <>
      <Helmet>
        <title>Visualizing PostgreSQL data with Tableau</title>
        <meta
          name="description"
          content="A presentation on visualzing PostgreSQL data with Tableau for the Digital History course at Queens University of Charlotte."
        />
      </Helmet>
      <PageTemplate
        url="https://raw.githubusercontent.com/nkmwicz/teach-lectures/master/digital-history/12-tableau.json"
        slide={slide}
        setSlides={setSlides}
      />
    </>
  );
}

Tableau.propTypes = {
  slide: PropTypes.object.isRequired,
  setSlides: PropTypes.func.isRequired,
};
