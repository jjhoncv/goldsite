import React from "react";
import { Route, Routes } from "react-router-dom";
import { IRoute } from "./../shared/interfaces/route.interface";

interface RootRouterProps {
  routes?: IRoute[];
}

export const RootRouter: React.FC<RootRouterProps> = ({ routes }) => (
  <Routes>
    {routes &&
      routes?.map((route: any, key) => {
        const { path, index, IndexComponent: C1, props } = route;
        return (
          <Route
            index={index}
            key={key}
            path={path}
            element={<C1 {...props} />}
          >
            {route?.routes &&
              route?.routes?.map((route2: any, key2: number) => {
                const {
                  path: path2,
                  index: index2,
                  IndexComponent: C2,
                  props: props2,
                } = route2;
                return (
                  <Route
                    key={key2}
                    index={index2}
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
