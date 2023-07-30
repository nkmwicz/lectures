import { PageTemplate } from "ui";
import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

export function Intro({ slide, setSlides }) {
  return (
    <>
      <Helmet>
        <title>Introduction Lecture: Digital History</title>
        <meta
          name="description"
          content="Introductory presentation to HST 306: Digital History taught by Dr. Nathan Michalewicz at Queens University of Charlotte. "
        />
      </Helmet>
      <PageTemplate
        url="https://raw.githubusercontent.com/nkmwicz/teach-lectures/master/digital-history/01-intro.json"
        slide={slide}
        setSlides={setSlides}
      />
    </>
  );
}

Intro.propTypes = {
  slide: PropTypes.object.isRequired,
  setSlides: PropTypes.func.isRequired,
};
