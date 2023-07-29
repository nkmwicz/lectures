import "@nkmwicz/reactpresentation/dist/style.css";
import React from "react";
import {
  QuickLayoutNoArrows,
  cacheImages,
  Spinner,
} from "@nkmwicz/reactpresentation";
import propTypes from "prop-types";

export function PageTemplate({ url, slide, setSlides }) {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchSlides() {
      const res = await fetch(url);
      const data = await res.json();
      setSlides(data.slides);
      await cacheImages(data.images);
      setIsLoading(false);
    }
    fetchSlides();
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return <QuickLayoutNoArrows mode={"dark"} slide={slide} />;
}

PageTemplate.propTypes = {
  url: propTypes.string.isRequired,
  slide: propTypes.string.isRequired,
  setSlides: propTypes.func.isRequired,
};
