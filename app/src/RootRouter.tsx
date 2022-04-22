import * as React from "react";
import { Route, Routes } from "react-router-dom";
import { Route as IRoute } from "./routesRoot";

interface RootRouterProps {
  routes?: IRoute[];
}

export const RootRouter: React.FC<RootRouterProps> = ({ routes }) => (
  <Routes>
    {routes &&
      routes.map((route: any, index) => {
        const { path, IndexComponent: C1, props } = route;
        return (
          <Route key={index} path={path} element={<C1 {...props} />}>
            {route.routes &&
              route.routes?.map((route2: any, index2: number) => {
                const {
                  path: path2,
                  IndexComponent: C2,
                  props: props2,
                } = route2;
                return (
                  <Route
                    key={index2}
                    path={path2}
                    element={<C2 {...props2} />}
                  />
                );
              })}
          </Route>
        );
      })}
  </Routes>
);
