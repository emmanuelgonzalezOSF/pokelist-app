import { createRoot } from "react-dom/client";
import { StrictMode, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CardList from "./components/CardList";
import Form from "./components/Form";
import Details from "./components/Details";
import PokedexData from "./pokedex.js";

const App = () => {
  const [pokedex, setPokedex] = useState(PokedexData);
  const handleFormSubmit = (pokemon) => {
    setPokedex((oldPokedex) => [...oldPokedex, pokemon]);
  };

  return (
    <div>
      <BrowserRouter>
        <Link to="/">
          <h1 className="home_title">Pokelist App!</h1>
        </Link>
        <Routes>
          <Route path="/details/:id" element={<Details pokedex={pokedex} />} />
          <Route
            path="/"
            element={
              <>
                <Form onSubmit={handleFormSubmit} />
                <CardList pokedex={pokedex} />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
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
