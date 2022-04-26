import { matchPath } from "react-router-dom";
import { Request } from "express";
import { IRoute } from "../shared/interfaces/route.interface";
export const hasNested = (route: IRoute | undefined) =>
  route && route.path?.split("/").pop() === "*";

export const hasRoutes = (route: IRoute | undefined) =>
  route?.routes && route?.routes?.length > 0;

export const firstSplit = (route: IRoute | undefined) =>
  route?.path?.split("/")[0];

export const validPath = (route: IRoute) =>
  route.path ? "/" + route.path : "";

export const updatedRoutes = (
  routes: IRoute[],
  props: any,
  req: Request
): IRoute[] => {
  const findAndUpdate = (route: IRoute, oldPath: string = ""): any => {
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

export const findRouteCurrent = (routes: IRoute[], req: Request) => {
  let activeRoute = filterRouteBase(routes).find((route: IRoute) =>
    matchPath({ path: route.path || "" }, req.path)
  );

  const initPath = firstSplit(activeRoute);

  if (hasNested(activeRoute) && hasRoutes(activeRoute)) {
    activeRoute?.routes
      ?.filter((r: any) => !/\*/.test(r.path))
      .forEach((route: IRoute) => {
        const pathTemp = initPath + validPath(route);

        if (matchPath({ path: pathTemp }, req.path)) {
          activeRoute = route;
        }

        if (hasNested(activeRoute) && hasRoutes(activeRoute)) {
          activeRoute?.routes?.forEach((_route: IRoute) => {
            const secondPath = initPath + "/" + firstSplit(_route);

            if (matchPath({ path: secondPath }, req.path)) {
              activeRoute = _route;
            }

            if (hasNested(_route) && hasRoutes(_route)) {
              _route?.routes?.forEach((route2: IRoute) => {
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
