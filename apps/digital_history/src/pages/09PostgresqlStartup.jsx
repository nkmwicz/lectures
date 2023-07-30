import { PageTemplate } from "ui";
import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

export function PostgresqlStartup({ slide, setSlides }) {
  return (
    <>
      <Helmet>
        <title>PostgreSQL Startup</title>
        <meta
          name="description"
          content="A presentation on getting started with PostgreSQL for the Digital History course at Queens University of Charlotte."
        />
      </Helmet>
      <PageTemplate
        url="https://raw.githubusercontent.com/nkmwicz/teach-lectures/master/digital-history/09-postgresql-startup.json"
        slide={slide}
        setSlides={setSlides}
      />
    </>
  );
}

PostgresqlStartup.propTypes = {
  slide: PropTypes.object,
  setSlides: PropTypes.func.isRequired,
};
