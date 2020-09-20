import React from "react";
import { useQuery, QueryStatus } from "react-query";

export const CallComponent = () => {
  const { data, error, status } = useQuery(
    "todos",
    async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      const data = await response.json();
      return data;
    }
  );
  return (
    <div>
      <h1>From Component: </h1>
      {error}
      {status === QueryStatus.Idle && <p>Idle</p>}
      {status === QueryStatus.Error && <p>Has error</p>}
      {status === QueryStatus.Loading && <p>Loading Data</p>}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
