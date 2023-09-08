const Card = ({ prev, next, setUrl }) => {
  console.log(`prev: ${prev}, next: ${next}`);

  const goToUrl = (e) => {
    const url = e.currentTarget.dataset.url;

    if (url) {
      setUrl(url);
    }
  };
  return (
    <div className="arrow-pagination">
      <button
        className={prev ? "arrow-left" : "arrow-left disabled"}
        data-url={prev}
        onClick={goToUrl}
      >
        ⬅
      </button>
      <button
        className={next ? "arrow-right" : "arrow-right disabled"}
        data-url={next}
        onClick={goToUrl}
      >
        ➡
      </button>
    </div>
  );
};

export default Card;
