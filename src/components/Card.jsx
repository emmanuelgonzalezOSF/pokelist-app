const Card = ({ pokemon }) => {
  return (
    <div className="card">
      <img src={`./../images/${pokemon}.png`} alt={pokemon} />
      <div className="card__container">
        <h2>{pokemon}</h2>
      </div>
    </div>
  );
};

export default Card;
