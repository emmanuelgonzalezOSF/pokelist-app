import { createRoot } from "react-dom/client";
import { StrictMode, useState } from "react";
import initialPokedex from "./pokedex";
import CardList from "./components/CardList";
import Form from "./components/Form";

const App = () => {
  const [pokedex, setPokedex] = useState(initialPokedex);
  const handleFormSubmit = (pokemon) => {
    setPokedex((oldPokedex) => [...oldPokedex, pokemon]);
  };

  return (
    <div>
      <h1>Pokelist App!</h1>
      <Form onSubmit={handleFormSubmit} />
      <CardList pokedex={pokedex} />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
