import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import Pokedex from "./pokedex";
import CardList from "./components/CardList";

const App = () => (
  <div>
    <h1>Pokelist App!</h1>
    <CardList pokedex={Pokedex} />
  </div>
);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
