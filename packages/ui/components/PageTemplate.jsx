import "@nkmwicz/reactpresentation/dist/style.css";
import React from "react";
import {
  QuickLayoutNoArrows,
  cacheImages,
  Spinner,
} from "@nkmwicz/reactpresentation";
import PropTypes from "prop-types";
import { useRecoilState, useRecoilValue } from "recoil";
import { slideState, allSlidesState } from "ui";

export function PageTemplate({ url }) {
  const [isLoading, setIsLoading] = React.useState(true);
  const slide = useRecoilValue(slideState);
  const [allSlides, setAllSlides] = useRecoilState(allSlidesState);

  React.useEffect(() => {
    async function fetchSlides() {
      const res = await fetch(url);
      const data = await res.json();
      setAllSlides(data.slides);
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
  url: PropTypes.string.isRequired,
};
