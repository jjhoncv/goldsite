import fs from "fs";
import path from "path";

import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";

import { App } from "./../App";
import { QueryClient } from "react-query";
import { Request } from "express";
import { RootRouter } from "../RootRouter";
import { routesRoot, Route } from "../routesRoot";

interface IRenderer {
  Component?: React.ReactNode;
  state?: any;
  req: Request;
  routes: Route[];
}

const clientBundleScript = `<script src="http://0.0.0.0:4000/statics/js/app.js"></script>`; // [B]
const clientBundleStyle = `<link rel="stylesheet" href="http://0.0.0.0:4000/statics/css/app.css">`; // [B]

export const renderer = ({ routes, state = "", req }: IRenderer) => {
  // let indexHTML = fs.readFileSync(path.resolve(__dirname, "./index2.html"), {
  //   encoding: "utf8",
  // });

  const queryClient = new QueryClient();

  let appHTML = renderToString(
    <App queryClient={queryClient} state={state}>
      <StaticRouter location={req.path}>
        <RootRouter routes={routesRoot} />
      </StaticRouter>
    </App>
  );

  // indexHTML = indexHTML
  //   .replace('<div id="app"></div>', `<div id="app">${appHTML}</div>`)
  //   .replace(
  //     '<script id="react-query"></script>',
  //     `<script id="react-query">window.__REACT_QUERY_STATE__ = ${JSON.stringify(
  //       state
  //     )};</script>`
  //   );

  let indexHTML = `
  <!DOCTYPE html>
  <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>My SSR App</title>
          ${clientBundleStyle}
      </head>
      <body>
          <div id='app'>${appHTML}</div>
          <script id="react-query">window.__REACT_QUERY_STATE__ = ${JSON.stringify(
            state
          )};</script>
            ${clientBundleScript}
      </body>
  </html>`;

  return indexHTML;
};
