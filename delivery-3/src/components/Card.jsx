import { Link } from "react-router-dom";

const Card = ({ name, image, id }) => {
  return (
    <Link to={`/details/${id}`}>
      <div className="card">
        <img src={image} alt={name} />
        <div className="card__container">
          <h2>{name}</h2>
        </div>
      </div>
    </Link>
  );
};

export default Card;
