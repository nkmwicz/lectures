import { PageTemplate } from "ui";
import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

export function DatasetsDatabases({ slide, setSlides }) {
  return (
    <>
      <Helmet>
        <title>Datasets & Databases</title>
        <meta
          name="description"
          content="A presentation on Datasets and Databases for the Digital History course at Queens University of Charlotte."
        />
      </Helmet>
      <PageTemplate
        url="https://raw.githubusercontent.com/nkmwicz/teach-lectures/master/digital-history/08-datasets-databases.json"
        slide={slide}
        setSlides={setSlides}
      />
    </>
  );
}

DatasetsDatabases.propTypes = {
  slide: PropTypes.object,
  setSlides: PropTypes.func.isRequired,
};
