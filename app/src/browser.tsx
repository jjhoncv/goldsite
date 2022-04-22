import * as React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { QueryClient } from "react-query";

import { App } from "./App";
import { RootRouter } from "./RootRouter";
import { routesRoot } from "./routesRoot";

const dehydratedState = (window as any).__REACT_QUERY_STATE__;

const queryClient = new QueryClient();

ReactDOM.render(
  <App queryClient={queryClient} state={dehydratedState}>
    <BrowserRouter>
      <RootRouter routes={routesRoot} />
    </BrowserRouter>
  </App>,
  document.getElementById("app")
);
