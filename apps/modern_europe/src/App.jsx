import { Arrow, Nav, useSlideParameters } from "ui";
import { Router } from "./router";
import { Pages } from "./components/pages";

function App() {
  useSlideParameters();
  return (
    <>
      <Arrow />
      <Nav pages={Pages} />
      <Router />
    </>
  );
}

export default App;
