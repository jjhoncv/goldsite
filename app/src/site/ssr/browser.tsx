import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { QueryClient } from "react-query";

import { App } from "./../App";
import { routes } from "./../routers/routes";
import { RootRouter } from "../routers";

const dehydratedState = (window as any).__REACT_QUERY_STATE__;

const queryClient = new QueryClient();

ReactDOM.render(
  <App queryClient={queryClient} state={dehydratedState}>
    <BrowserRouter>
      <RootRouter routes={routes} />
    </BrowserRouter>
  </App>,
  document.getElementById("app")
);
