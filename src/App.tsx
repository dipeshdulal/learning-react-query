import React from "react";
import "./App.css";
import { CallComponent } from "./pages/CallComponent";
import { ReactQueryDevtools } from "react-query-devtools";
import { Pagination } from "./pages/Pagination";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { InfiniteLoading } from "./pages/InfiniteLoading";
import { DataMutation } from "./pages/DataMutation";

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/call-component">Call Component</Link>
        <Link to="/">Pagination</Link>
        <Link to="/infinite">Infinite Loading</Link>
        <Link to="/data-mutation">Data Mutation</Link>
        <Switch>
          <Route exact path="/call-component" component={CallComponent} />
          <Route exact path="/infinite" component={InfiniteLoading} />
          <Route exact path="/data-mutation" component={DataMutation} />
          <Route exact path="/" component={Pagination} />
        </Switch>
      </Router>
      <ReactQueryDevtools />
    </div>
  );
}

export default App;
