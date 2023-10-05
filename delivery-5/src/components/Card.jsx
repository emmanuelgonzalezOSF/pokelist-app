import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import colors from "../colors";

const LinkWrapper = styled(Link)`
  .card {
    display: flex;
    flex-grow: 1;
    width: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
    transition: 0.3s;
    margin: 0 10px 10px 0;
    padding: 10px;
    box-shadow: 0 4px 8px ${colors.dark};
    background-color: ${colors.primary};
    color: ${colors.light};

    &:hover {
      box-shadow: 0 8px 16px ${colors.dark};
      background-color: ${colors.secondary};
      color: ${colors.dark};
    }

    .card__container {
      text-transform: capitalize;
      padding: 2px 16px;
    }
  }
`;

const Card = ({ name, url }) => {
  return (
    <LinkWrapper to={`/details/${name}`} state={{ url: url }}>
      <div className="card">
        <div className="card__container">
          <h2>{name}</h2>
        </div>
      </div>
    </LinkWrapper>
  );
};

export default Card;
