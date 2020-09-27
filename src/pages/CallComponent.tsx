import React, { useState } from "react";
import { useQuery, QueryStatus, useQueryCache } from "react-query";

const fetchFunction = async (_: any, id: string) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id || 1}`
  );
  const data = await response.json();
  return data;
};

export const CallComponent = () => {
  const [searchId, setSearchId] = useState<string>();
  const [value, setValue] = useState<string>();

  const queryCache = useQueryCache();

  const { data, error, status } = useQuery(["todos", searchId], fetchFunction, {
    forceFetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: false,
  });
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button onClick={() => setSearchId(value)}>Search Data</button>
      <h1>From Component: </h1>
      <pre>{JSON.stringify(error, null, 2)}</pre>
      {status === QueryStatus.Idle && <p>Idle</p>}
      {status === QueryStatus.Error && <p>Has error</p>}
      {status === QueryStatus.Loading && <p>Loading Data</p>}
      <pre>{JSON.stringify(data, null, 2)}</pre>

      <button onClick={() => queryCache.invalidateQueries("todos")}>
        InValidate
      </button>
    </div>
  );
};
