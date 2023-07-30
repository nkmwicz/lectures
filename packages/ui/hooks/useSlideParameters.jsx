import React from "react";
import { useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";

export function useSlideParameters({ allSlides, slideIndex, setSlideIndex }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const param = searchParams.get("slide");
  const isNumber = (value) => {
    return /^-?\d*\.?\d+$/.test(value);
  };
  const isFirstRender = React.useRef(true);

  React.useEffect(() => {
    console.log("useSlideParameters", param);
    console.log("allSlides", allSlides.length);
    console.log("slideIndex", slideIndex);
    if (isFirstRender.current) {
      isFirstRender.current = false;
      if (allSlides.length > 0) {
        console.log("param", param);
        console.log("allSlides", allSlides.length);
        console.log("slideIndex", slideIndex);
        if (param === null || param === undefined) {
          if (slideIndex === 0) {
            setSearchParams({ slide: 0 });
            return;
          }
        }
        if (param > allSlides.length - 1) {
          setSlideIndex(allSlides.length - 1);
          setSearchParams({ slide: allSlides.length - 1 });
          return;
        }
        if (param < 0) {
          setSlideIndex(0);
          setSearchParams({ slideIndex: 0 });
          return;
        }
        if (!isNumber(param)) {
          setSlideIndex(parseInt(0));
          setSearchParams({ slide: 0 });
          return;
        }
        if (param !== null || param !== undefined) {
          setSlideIndex(parseInt(param));
          setSearchParams({ slide: param });
          return;
        }
      }
    }
  }, [allSlides.length]);

  React.useEffect(() => {
    if (!isFirstRender.current) {
      setSearchParams({ slide: slideIndex });
    }
  }, [slideIndex]);

  return null;
}

useSlideParameters.propTypes = {
  allSlides: PropTypes.array,
  slideIndex: PropTypes.number.isRequired,
  setSlideIndex: PropTypes.func.isRequired,
};
