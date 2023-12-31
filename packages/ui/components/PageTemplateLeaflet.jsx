import React from "react";
import {
  QuickLayoutNoArrows,
  cacheImages,
  Spinner,
  SplitSlideChild,
} from "@nkmwicz/reactpresentation";
import { useRecoilState, useRecoilValue } from "recoil";
import { allSlidesState, slideIndexState, slideState } from "ui";
import { LeafletMap } from "ui";
import { useSearchParams } from "react-router-dom";

export function PageTemplateLeaflet({ url, mapCenter }) {
  const [slides, setSlides] = useRecoilState(allSlidesState);
  const slide = useRecoilValue(slideState);
  const [slideIndex, setSlideIndex] = useRecoilState(slideIndexState);
  const [isLoading, setIsLoading] = React.useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const param = searchParams.get("slideIndex");
  const isNumber = (value) => {
    return /^-?\d*\.?\d+$/.test(value);
  };

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

  React.useEffect(() => {
    setSearchParams({ slide: slideIndex });
  }, [slideIndex]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      {slide.map ? (
        <div className="mainDark">
          <SplitSlideChild
            title={slide.title}
            subTitle={slide.subTitle}
            text={slide.text}
          >
            <LeafletMap mapCenter={mapCenter} />
          </SplitSlideChild>
        </div>
      ) : (
        <QuickLayoutNoArrows mode={"dark"} slide={slide} />
      )}
    </>
  );
}
