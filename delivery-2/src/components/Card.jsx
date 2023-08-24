const Card = ({ pokemonName, pokemonImage }) => {
  return (
    <div className="card">
      <img src={pokemonImage} alt={pokemonName} />
      <div className="card__container">
        <h2>{pokemonName}</h2>
      </div>
    </div>
  );
};

export default Card;
