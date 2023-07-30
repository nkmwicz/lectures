import { Arrow, Nav } from "ui";
import { Router } from "./router";
import { Pages } from "./components/Pages";
import "./App.css";
import { useRecoilState, useRecoilValue } from "recoil";
import { allSlidesState, slideIndexState } from "ui";
import { useSlideParameters } from "ui";
function App() {
  const allSlides = useRecoilValue(allSlidesState);
  const [slideIndex, setSlideIndex] = useRecoilState(slideIndexState);
  useSlideParameters({ allSlides, slideIndex, setSlideIndex });

  return (
    <>
      <Nav pages={Pages} />
      <Arrow />
      <Router />
    </>
  );
}

export default App;
