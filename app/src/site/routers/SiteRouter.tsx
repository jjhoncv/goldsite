import React from "react";

import { Routes, Route, Outlet } from "react-router-dom";
import { routes } from "./routes";

export const SiteRouter = () => {
  return (
    <Routes>
      {routes
        ?.find((r) => r.path === "*")
        ?.routes?.map((route: any, key: number) => {
          const { path, index, IndexComponent: C1, props } = route;
          return (
            <Route
              key={key}
              index={index}
              path={path}
              element={<C1 {...props} />}
            >
              {route?.routes &&
                route?.routes?.map((route2: any, key: number) => {
                  const {
                    path: path2,
                    index: index2,
                    IndexComponent: C2,
                    props: props2,
                  } = route2;
                  return (
                    <Route
                      key={key}
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
};
