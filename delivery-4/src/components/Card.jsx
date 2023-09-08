import { Link } from "react-router-dom";

const Card = ({ name, url }) => {
  return (
    <Link to={`/details/${name}`} state={{ url: url }}>
      <div className="card">
        <div className="card__container">
          <h2>{name}</h2>
        </div>
      </div>
    </Link>
  );
};

export default Card;
