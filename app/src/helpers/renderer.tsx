import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import fs from "fs";
import path from "path";
import { App } from "../App";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { Request } from "express";

export const renderer = (dehydratedState: any, req: Request) => {
  let indexHTML = fs.readFileSync(path.resolve(__dirname, "./index.html"), {
    encoding: "utf8",
  });

  const queryClient = new QueryClient();

  let appHTML = renderToString(
    <QueryClientProvider client={queryClient}>
      <Hydrate state={dehydratedState}>
        <StaticRouter location={req.path}>
          <App />
        </StaticRouter>
      </Hydrate>
    </QueryClientProvider>
  );

  indexHTML = indexHTML
    .replace('<div id="app"></div>', `<div id="app">${appHTML}</div>`)
    .replace(
      '<script id="react-query"></script>',
      `<script id="react-query">window.__REACT_QUERY_STATE__ = ${JSON.stringify(
        dehydratedState
      )};</script>`
    );

  return indexHTML;
};
