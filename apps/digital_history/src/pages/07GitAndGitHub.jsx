import { PageTemplate } from "ui";
import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

export function GitAndGitHub({ slide, setSlides }) {
  return (
    <>
      <Helmet>
        <title>Git & GitHub</title>
        <meta
          name="description"
          content="A presentation on source control, Git, and GitHub for the Digital History course at Queens University of Charlotte."
        />
      </Helmet>
      <PageTemplate
        url="https://raw.githubusercontent.com/nkmwicz/teach-lectures/master/digital-history/07-git-and-github.json"
        slide={slide}
        setSlides={setSlides}
      />
    </>
  );
}

GitAndGitHub.propTypes = {
  slide: PropTypes.object.isRequired,
  setSlides: PropTypes.func.isRequired,
};
