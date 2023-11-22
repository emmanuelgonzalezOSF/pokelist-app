import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchPokedex from "./../api/fetchPokedex";
import Spinner from "./Spinner";
import styled from "@emotion/styled";
import colors from "../colors";

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  box-shadow: 0 8px 16px 0 ${colors.dark};
  border-radius: 50px;
  margin: 0 auto;
  background-color: ${colors.primary};
  color: ${colors.light};
  text-transform: capitalize;

  .card__container {
    display: flex;
    justify-content: center;
    align-items: center;

    .left {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    img {
      min-width: 250px;
      max-height: 250px;
    }
  }
`;

const Details = () => {
  const url = useLocation()?.state?.url;
  const { data, isLoading, error } = useQuery(["pokedex", url], fetchPokedex);
  const pokemon = data || null;
  const name = pokemon?.name;
  const image = pokemon?.sprites?.front_default;

  if (isLoading) {
    return <Spinner>⚙</Spinner>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <DetailsWrapper>
      <h2>{name}</h2>
      <div className="card__container">
        <div className="left">
          <img src={image} alt={name} />
        </div>
      </div>
    </DetailsWrapper>
  );
};

export default Details;
