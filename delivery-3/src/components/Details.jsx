import { useParams } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";

const Details = ({ pokedex }) => {
  const { id } = useParams();
  const pokemon = pokedex.find((pokemon) => pokemon.id === Number(id));
  const { name, image, details, location } = pokemon;

  return (
    <div className="card_details">
      <h2>{name}</h2>
      <div className="card__container">
        <div className="left">
          <img src={image} alt={name} />
          <h3>{location}</h3>
        </div>
        <div className="right">
          <p>{details}</p>
        </div>
      </div>
    </div>
  );
};

export default function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}
