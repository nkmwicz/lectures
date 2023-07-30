import { PageTemplate } from "ui";
import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

export function Timelines({ slide, setSlides }) {
  return (
    <>
      <Helmet>
        <title>Timelines</title>
        <meta
          name="description"
          content="A presentation introducing timelines for the Digital History course at Queens University of Charlotte."
        />
        <meta name="keywords" content="Timelines, digital history." />
      </Helmet>
      <PageTemplate
        url="https://raw.githubusercontent.com/nkmwicz/teach-lectures/master/digital-history/15-timelines.json"
        slide={slide}
        setSlides={setSlides}
      />
    </>
  );
}

Timelines.propTypes = {
  slide: PropTypes.object.isRequired,
  setSlides: PropTypes.func.isRequired,
};
