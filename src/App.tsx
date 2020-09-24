import React from "react";
import "./App.css";
import { CallComponent } from "./CallComponent";
import { ReactQueryDevtools } from "react-query-devtools";
import { Pagination } from "./Pagination";

function App() {
  return (
    <div className="App">
      <CallComponent />
      <Pagination />
      <ReactQueryDevtools />
    </div>
  );
}

export default App;
