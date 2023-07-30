import { PageTemplate } from "ui";
import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";
export function DigitalHistory({ slide, setSlides }) {
  return (
    <>
      <Helmet>
        <title>What is Digital History</title>
        <meta
          name="description"
          content="A presentation introducing Digital History and the basic tools used for it for the Digital History course at Queens University of Charlotte."
        />
      </Helmet>
      <PageTemplate
        url="https://raw.githubusercontent.com/nkmwicz/teach-lectures/master/digital-history/02-digital-history.json"
        slide={slide}
        setSlides={setSlides}
      />
    </>
  );
}

DigitalHistory.propTypes = {
  slide: PropTypes.object.isRequired,
  setSlides: PropTypes.func.isRequired,
};
