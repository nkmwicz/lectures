import { PageTemplate } from "ui";
import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

export function PostgresqlDesign({ slide, setSlides }) {
  return (
    <>
      <Helmet>
        <title>PostgreSQL Database Design & DBeaver</title>
        <meta
          name="description"
          content="A presentation on designing, normalizing, and ingesting data into PostgreSQL with DBeaver for the Digital History course at Queens University of Charlotte."
        />
      </Helmet>
      <PageTemplate
        url="https://raw.githubusercontent.com/nkmwicz/teach-lectures/master/digital-history/10-postgresql-design.json"
        slide={slide}
        setSlides={setSlides}
      />
    </>
  );
}

PostgresqlDesign.propTypes = {
  slide: PropTypes.object.isRequired,
  setSlides: PropTypes.func.isRequired,
};
