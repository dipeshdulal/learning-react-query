import React from "react";
import "./App.css";
import { CallComponent } from "./pages/CallComponent";
import { ReactQueryDevtools } from "react-query-devtools";
import { Pagination } from "./pages/Pagination";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { InfiniteLoading } from "./pages/InfiniteLoading";

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/call-component">Call Component</Link>
        <Link to="/">Pagination</Link>
        <Link to="/infinite">Infinite Loading</Link>
        <Switch>
          <Route exact path="/call-component" component={CallComponent} />
          <Route exact spath="/infinite" component={InfiniteLoading} />
          <Route exact spath="/" component={Pagination} />
        </Switch>
      </Router>
      <ReactQueryDevtools />
    </div>
  );
}

export default App;
