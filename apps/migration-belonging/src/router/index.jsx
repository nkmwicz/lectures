import { Routes, Route } from "react-router-dom";
import { Iberia } from "../pages/Iberia";
import { Reconquista } from "../pages/Reconquista";
import { Reformation } from "../pages/Reformation";
import { Puritans } from "../pages/Puritans";
import { Ireland } from "../pages/Ireland";
import { Ottomans } from "../pages/Ottomans";
import { TheoryHistory } from "../pages/TheoryHistory";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<TheoryHistory />} />
      <Route path="/intro-iberia" element={<Iberia />} />
      <Route path="/reconquista-moriscos" element={<Reconquista />} />
      <Route path="/reformation-england" element={<Reformation />} />
      <Route path="/puritans" element={<Puritans />} />
      <Route path="/ireland" element={<Ireland />} />
      <Route path="/ottoman-minorities" element={<Ottomans />} />
    </Routes>
  );
}
