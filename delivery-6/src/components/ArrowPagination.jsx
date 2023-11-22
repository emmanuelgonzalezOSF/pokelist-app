import styled from "@emotion/styled";
import colors from "../colors";

const ArrowPaginationWrapper = styled("div")`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .arrow {
    font-size: 200px;
    color: ${colors.primary};
    background-color: ${colors.transparent};
    border: none;
    outline: none;
    transition: all 0.5s ease-in-out;

    &:hover {
      cursor: pointer;
      color: ${colors.dark};
    }

    &.disabled {
      pointer-events: none;
      opacity: 0.5;
    }
  }
`;

const ArrowPagination = ({ prev, next, setUrl }) => {
  const goToUrl = (e) => {
    const url = e.currentTarget.dataset.url;

    if (url) {
      setUrl(url);
    }
  };
  return (
    <ArrowPaginationWrapper>
      <button
        className={prev ? "arrow" : "arrow disabled"}
        data-url={prev}
        onClick={goToUrl}
      >
        ⬅
      </button>
      <button
        className={next ? "arrow" : "arrow disabled"}
        data-url={next}
        onClick={goToUrl}
      >
        ➡
      </button>
    </ArrowPaginationWrapper>
  );
};

export default ArrowPagination;
