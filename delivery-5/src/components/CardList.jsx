import Card from "./Card";
import Spinner from "./Spinner";
import ArrowPagination from "./ArrowPagination";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import fetchPokedex from "./../api/fetchPokedex";
import styled from "@emotion/styled";

const CardListWrapper = styled("div")`
  .container__cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

const defaultUrl = "https://pokeapi.co/api/v2/pokemon";
const CardList = () => {
  const [url, setUrl] = useState(defaultUrl);
  const { data, isLoading, error } = useQuery(["pokedex", url], fetchPokedex);
  const pokedex = data?.results ?? [];
  const prev = data?.previous ?? null;
  const next = data?.next ?? null;

  if (isLoading) {
    return <Spinner>⚙</Spinner>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  console.log(data);

  return (
    <CardListWrapper>
      <div className="container__cards">
        {pokedex.map((pokemon) => (
          <Card
            name={pokemon.name}
            key={pokemon.name}
            url={pokemon.url}
            setUrl={setUrl}
          />
        ))}
      </div>
      <ArrowPagination prev={prev} next={next} setUrl={setUrl} />
    </CardListWrapper>
  );
};

export default CardList;
