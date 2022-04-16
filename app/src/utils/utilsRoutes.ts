import { Route } from "./../routes";
export const hasNested = (route: Route | undefined) =>
  route && route.path?.split("/").pop() === "*";

export const hasRoutes = (route: Route | undefined) =>
  route?.routes && route?.routes?.length > 0;

export const firstSplit = (route: Route | undefined) =>
  route?.path?.split("/")[0];

export const validPath = (route: Route) => (route.path ? "/" + route.path : "");
