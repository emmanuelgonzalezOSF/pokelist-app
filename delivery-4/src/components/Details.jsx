import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchPokedex from "./../api/fetchPokedex";

const Details = () => {
  const url = useLocation()?.state?.url;
  const { data, isLoading, error } = useQuery(["pokedex", url], fetchPokedex);
  const pokemon = data || null;
  const name = pokemon?.name;
  const image = pokemon?.sprites?.front_default;

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="card_details">
      <h2>{name}</h2>
      <div className="card__container">
        <div className="left">
          <img src={image} alt={name} />
        </div>
      </div>
    </div>
  );
};

export default Details;
