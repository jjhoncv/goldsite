import { dehydrate, QueryClient } from "react-query";
import { routesRoot } from "../routesRoot";
import { renderer } from "./renderer";
import { Request, Response } from "express";
import { findRouteCurrent, updatedRoutes } from "../utils/resolveRoutes";

export const controller = async (req: Request, res: Response) => {
  const queryClient = new QueryClient();

  let route = findRouteCurrent(routesRoot, req);
  let state = "";
  let routes = routesRoot;

  const render = {
    state,
    routes,
    req,
  };

  if (route?.fetchData) {
    const { state: stateNext, ...props } = await route?.fetchData(req, res);
    const routesNext = updatedRoutes(routes, props, req);
    render.state = stateNext;
    render.routes = routesNext;
  }

  const content = renderer(render);

  res.send(content);

  queryClient.clear();
};
