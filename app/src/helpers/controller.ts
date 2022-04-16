import { QueryClient } from "react-query";
import { routes } from "../routes";
import { renderer } from "./renderer";
import { Request, Response } from "express";
import { matchPath } from "react-router-dom";
import { Route } from "./../routes";
import {
  firstSplit,
  hasNested,
  hasRoutes,
  validPath,
} from "../utils/utilsRoutes";

const findRouteByLevels = (routes: Route[], req: Request) => {
  let activeRoute = routes.find((route: Route) =>
    matchPath({ path: route.path || "" }, req.path)
  );

  const initPath = firstSplit(activeRoute);

  if (hasNested(activeRoute) && hasRoutes(activeRoute)) {
    activeRoute?.routes?.forEach((route: Route) => {
      const lastPath = validPath(route);
      const pathTemp = initPath + lastPath;

      if (matchPath({ path: pathTemp }, req.path)) {
        activeRoute = route;
      }

      const secondPath = "/" + firstSplit(route);

      if (hasNested(route) && hasRoutes(route)) {
        route?.routes?.forEach((_route: Route) => {
          const lastPath = validPath(_route);
          const pathTemp = initPath + secondPath + lastPath;

          if (matchPath({ path: pathTemp }, req.path)) {
            activeRoute = _route;
          }
        });
      }
    });
  }

  return activeRoute;
};

export const controller = async (req: Request, res: Response) => {
  const queryClient = new QueryClient();

  const activeRoute = findRouteByLevels(routes, req);

  let dehydratedState = "";
  if (activeRoute?.fetchData) {
    dehydratedState = await activeRoute?.fetchData(req);
    // console.log({ activeRoute });
  }

  const content = renderer(dehydratedState, req);
  res.send(content);
  queryClient.clear();
};
