import * as React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
// import { Root } from "./Root";
import { App } from "./App";

const dehydratedState = (window as any).__REACT_QUERY_STATE__;

const queryClient = new QueryClient();

ReactDOM.hydrate(
  <QueryClientProvider client={queryClient}>
    <Hydrate state={dehydratedState}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Hydrate>
  </QueryClientProvider>,
  document.getElementById("app")
);
