import React from "react";
import { usePaginatedQuery } from "react-query";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

const fetchData = async (_: any, page: number) => {
  const response = await fetch(`${baseURL}?_start=${page * 5}&_limit=5`);
  return response.json();
};

export const Pagination = () => {
  const [page, setPage] = React.useState(0);

  const {
    isLoading,
    isError,
    error,
    resolvedData,
    isFetching,
  } = usePaginatedQuery(["species", page], fetchData, {
    retry: false,
    refetchOnWindowFocus: false,
  });

  return (
    <div>
      <div className="button-wrapper">
        <button onClick={() => setPage((p) => Math.max(p - 1, 0))}>
          &lt; Previous
        </button>
        <span>{page + 1}</span>
        <button onClick={() => setPage((p) => p + 1)}>Next &gt;</button>
        {isFetching && <span>Fetching ...</span>}
      </div>
      {isLoading && <p>Loading...</p>}
      {isError && (
        <pre style={{ color: "red" }}>{JSON.stringify(error, null, 2)}</pre>
      )}
      {resolvedData?.map((d: any) => (
        <pre
          style={{
            border: "1px solid",
            padding: 10,
            margin: 10,
            width: "200px",
            display: "inline-block",
            whiteSpace: "pre-wrap",
          }}
        >
          {JSON.stringify(d, null, 2)}
        </pre>
      ))}
    </div>
  );
};
