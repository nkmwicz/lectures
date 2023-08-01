import { Arrow, Nav } from "ui";
import { Router } from "./router";
import { Pages } from "./components/pages";

function App() {
  return (
    <>
      <Arrow />
      <Nav pages={Pages} />
      <Router />
    </>
  );
}

export default App;
