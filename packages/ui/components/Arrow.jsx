import { Arrows } from "@nkmwicz/reactpresentation";
import { useRecoilState, useRecoilValue } from "recoil";
import { slideIndexState, allSlidesState } from "ui";

export function Arrow() {
  const [slideIndex, setSlideIndex] = useRecoilState(slideIndexState);
  const allSlides = useRecoilValue(allSlidesState);
  function nextSlide(e) {
    if (e && slideIndex < allSlides.length - 1) {
      setSlideIndex(slideIndex + 1);
    }
    if (e && slideIndex === allSlides.length - 1) {
      setSlideIndex(0);
    }
  }

  function prevSlide(e) {
    if (e && slideIndex > 0) {
      setSlideIndex(slideIndex - 1);
    }
    if (e && slideIndex === 0) {
      setSlideIndex(allSlides.length - 1);
    }
  }
  return <Arrows handleNextClick={nextSlide} handlePrevClick={prevSlide} />;
}
