import { Nav } from "ui";
import { Router } from "./router";
import { Pages } from "./components/Pages";
import "./App.css";
function App() {
  return (
    <>
      <Nav pages={Pages} />
      <Router />
    </>
  );
}

export default App;
