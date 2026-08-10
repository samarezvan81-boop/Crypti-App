import styled from "./Pagination.module.css";

function Pagination({ page, setPage }) {
  const previousHandeler = () => {
    if (page <= 1) return;
    setPage((prev) => prev - 1);
  };

  const nextHandeler = () => {
    if (page >= 10) return;
    setPage((prev) => prev + 1);
  };

  return (
    <div className={styled.pagination}>
      <button
        onClick={previousHandeler}
        className={page === 1 ? styled.Disabled : null}
      >
        
        previous
      </button>

      <p
        onClick={() => setPage(1)}
        className={page === 1 ? styled.selected : null}
      >
        1
      </p>

      <p
        onClick={() => setPage(2)}
        className={page === 2 ? styled.selected : null}
      >
        2
      </p>

      {page > 2 && page < 9 && (
        <>
          <span>...</span>

          <p
            onClick={() => setPage(page)}
            className={styled.selected}
          >

            {page}
          </p>
        </>
      )}

      <span>...</span>

      <p
        onClick={() => setPage(9)}
        className={page === 9 ? styled.selected : null}
      >
        9
      </p>

      <p
        onClick={() => setPage(10)}
        className={page === 10 ? styled.selected : null}
      >
        10
      </p>

      <button
        onClick={nextHandeler}
        className={page === 10 ? styled.Disabled : null}
      >
        next
      </button>
    </div>
  );
}

export default Pagination;
