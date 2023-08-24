import Card from "./Card";

const CardList = ({ pokedex }) => {
  return (
    <div className="container__cards">
      {pokedex.map((pokemon, index) => (
        <Card
          pokemonName={pokemon.name}
          pokemonImage={pokemon.image}
          key={`${pokemon.name}-${index}`}
        />
      ))}
    </div>
  );
};

export default CardList;
