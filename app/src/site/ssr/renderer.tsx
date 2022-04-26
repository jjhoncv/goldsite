import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";

import { App } from "./../App";
import { QueryClient } from "react-query";
import { Request, Response } from "express";
import { RootRouter } from "../routers/RootRouter";
import { IRoute } from "../shared/interfaces/route.interface";
import { Html } from "./../shared/components/Html";
import { HelmetProvider } from "react-helmet-async";

interface IRenderer {
  Component?: React.ReactNode;
  state?: any;
  req: Request;
  routes: IRoute[];
}

export const renderer = ({ routes, state, req }: IRenderer, res: Response) => {
  const queryClient = new QueryClient();

  const css = [
    res.locals.assetPath("app.css"),
    res.locals.assetPath("vendors.css"),
  ];

  const scripts = [
    res.locals.assetPath("app.js"),
    res.locals.assetPath("vendors.js"),
  ];

  const helmetContext = {};

  const content = renderToString(
    <App queryClient={queryClient} state={state}>
      <StaticRouter location={req.path}>
        <HelmetProvider context={helmetContext}>
          <RootRouter routes={routes} />
        </HelmetProvider>
      </StaticRouter>
    </App>
  );

  return (
    "<!doctype html>" +
    renderToString(
      <Html
        css={css}
        helmetContext={helmetContext}
        scripts={scripts}
        state={JSON.stringify(state)}
      >
        {content}
      </Html>
    )
  );
};
