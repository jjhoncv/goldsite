import { matchPath } from "react-router-dom";
import { Route } from "./../routesRoot";
import { Request } from "express";
export const hasNested = (route: Route | undefined) =>
  route && route.path?.split("/").pop() === "*";

export const hasRoutes = (route: Route | undefined) =>
  route?.routes && route?.routes?.length > 0;

export const firstSplit = (route: Route | undefined) =>
  route?.path?.split("/")[0];

export const validPath = (route: Route) => (route.path ? "/" + route.path : "");

export const updatedRoutes = (
  routes: Route[],
  props: any,
  req: Request
): Route[] => {
  const findAndUpdate = (route: Route, oldPath: string = ""): any => {
    if (matchPath({ path: oldPath + route.path }, req.path)) {
      return {
        ...route,
        ...props,
      };
    } else {
      return {
        ...route,
        routes: route?.routes?.map((route2) =>
          findAndUpdate(route2, route.path)
        ),
      };
    }
  };
  return routes.map((r) => findAndUpdate(r));
};

const filterRouteBase = (routes: any[] | undefined) =>
  routes &&
  routes
    .find((r: any) => r.path === "*")
    .routes?.map((r: any) => (r.index ? { ...r, path: "/" } : r));

export const findRouteCurrent = (routes: Route[], req: Request) => {
  let activeRoute = filterRouteBase(routes).find((route: Route) =>
    matchPath({ path: route.path || "" }, req.path)
  );

  const initPath = firstSplit(activeRoute);

  if (hasNested(activeRoute) && hasRoutes(activeRoute)) {
    activeRoute?.routes
      ?.filter((r: any) => !/\*/.test(r.path))
      .forEach((route: Route) => {
        const pathTemp = initPath + validPath(route);

        if (matchPath({ path: pathTemp }, req.path)) {
          activeRoute = route;
        }

        if (hasNested(activeRoute) && hasRoutes(activeRoute)) {
          activeRoute?.routes?.forEach((_route: Route) => {
            const secondPath = initPath + "/" + firstSplit(_route);

            if (matchPath({ path: secondPath }, req.path)) {
              activeRoute = _route;
            }

            if (hasNested(_route) && hasRoutes(_route)) {
              _route?.routes?.forEach((route2: Route) => {
                const pathTemp = secondPath + validPath(route2);

                if (matchPath({ path: pathTemp }, req.path)) {
                  activeRoute = route2;
                }
              });
            }
          });
        }
      });
  }

  return activeRoute;
};
