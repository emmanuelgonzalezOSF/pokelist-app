import Card from "./Card";

const CardList = ({ pokedex }) => {
  return (
    <div class="container__cards">
      {pokedex.map((pokemon) => (
        <Card pokemon={pokemon} key={pokemon} />
      ))}
    </div>
  );
};

export default CardList;
