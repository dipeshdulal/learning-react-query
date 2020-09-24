import React from "react";
import { useInfiniteQuery } from "react-query";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

const fetchData = async (_: any, cursor: number) => {
  const response = await fetch(`${baseURL}?_start=${cursor}&_limit=5`);
  return response.json();
};

export const InfiniteLoading = () => {
  const {
    isFetching,
    isError,
    error,
    data,
    isFetchingMore,
    canFetchMore,
    fetchMore,
  } = useInfiniteQuery("infinite-posts", fetchData, {
    getFetchMore: (lastGroup) => {
      return lastGroup[lastGroup.length - 1].id;
    },
  });
  return (
    <div>
      <div>
        {isFetching && <span>fetching...</span>}
        {isError && <span>{JSON.stringify(error, null, 2)}</span>}
      </div>
      {data?.map((group, i) => (
        <React.Fragment key={i}>
          {group.map((d: any) => (
            <pre
              key={d.id}
              style={{
                border: "1px solid",
                padding: 10,
                margin: 10,
                width: "90%",
                display: "inline-block",
                whiteSpace: "pre-wrap",
              }}
            >
              {JSON.stringify(d, null, 2)}
            </pre>
          ))}
        </React.Fragment>
      ))}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 20,
        }}
      >
        <button
          onClick={() => fetchMore()}
          disabled={!canFetchMore || (isFetchingMore as boolean)}
        >
          {(isFetching && isFetchingMore && "Loading ...") || "See More"}
        </button>
      </div>
    </div>
  );
};
