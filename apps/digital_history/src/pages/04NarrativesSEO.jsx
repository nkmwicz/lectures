import { PageTemplate } from "ui";
import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

export function NarrativesSEO({ slide, setSlides }) {
  ``;
  return (
    <>
      <Helmet>
        <title>New Historical Narratives and SEO</title>
        <meta
          name="description"
          content="A presentation on the new types of historical narratives on the internet and how to optimize them for search engines for the Digital History course at Queens University of Charlotte."
        />
      </Helmet>
      <PageTemplate
        url="https://raw.githubusercontent.com/nkmwicz/teach-lectures/master/digital-history/04-new-narratives.json"
        slide={slide}
        setSlides={setSlides}
      />
    </>
  );
}

NarrativesSEO.propTypes = {
  slide: PropTypes.object,
  setSlides: PropTypes.func.isRequired,
};
