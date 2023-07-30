import { PageTemplate } from "ui";
import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

export function TradVDigital({ slide, setSlides }) {
  return (
    <>
      <Helmet>
        <title>Traditional Vs Digital Research</title>
        <meta
          name="description"
          content="A presentation on the differences between traditional and digital research questions for the Digital History course at Queens University of Charlotte."
        />
      </Helmet>
      <PageTemplate
        url="https://raw.githubusercontent.com/nkmwicz/teach-lectures/master/digital-history/05-trad-vs-digital.json"
        slide={slide}
        setSlides={setSlides}
      />
    </>
  );
}

TradVDigital.propTypes = {
  slide: PropTypes.object,
  setSlides: PropTypes.func.isRequired,
};
