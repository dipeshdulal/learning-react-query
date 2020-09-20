import React from "react";
import "./App.css";
import { CallComponent } from "./CallComponent";
import { useQuery, QueryStatus } from "react-query";
import { ReactQueryDevtools } from "react-query-devtools";

function App() {
  const { data, error, status, refetch } = useQuery(
    "todos",
    async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      const data = await response.json();
      return data;
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  return (
    <div className="App">
      <CallComponent />
      <button
        onClick={() => {
          refetch();
        }}
      >
        reload
      </button>
      {error}
      {status === QueryStatus.Idle && <p>Idle</p>}
      {status === QueryStatus.Error && <p>Has error</p>}
      {status === QueryStatus.Loading && <p>Loading Data</p>}
      <pre>{JSON.stringify(data, null, 2)}</pre>

      <ReactQueryDevtools />
    </div>
  );
}

export default App;
