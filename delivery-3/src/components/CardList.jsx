import Card from "./Card";

const CardList = ({ pokedex }) => {
  return (
    <div className="container__cards">
      {pokedex.map((pokemon) => (
        <Card
          name={pokemon.name}
          image={pokemon.image}
          id={pokemon.id}
          key={pokemon.id}
        />
      ))}
    </div>
  );
};

export default CardList;
