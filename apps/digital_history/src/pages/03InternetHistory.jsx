import { PageTemplate } from "ui";
import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

export function InternetHistory({ slide, setSlides }) {
  return (
    <>
      <Helmet>
        <title>History of the Internet and Digital History</title>
        <meta
          name="description"
          content="A presentation for on the history of the internet and the field of digital history for the Digital History course at Queens University of Charlotte."
        />
      </Helmet>
      <PageTemplate
        url="https://raw.githubusercontent.com/nkmwicz/teach-lectures/master/digital-history/03-internet.json"
        slide={slide}
        setSlides={setSlides}
      />
    </>
  );
}

InternetHistory.propTypes = {
  slide: PropTypes.object.isRequired,
  setSlides: PropTypes.func.isRequired,
};
