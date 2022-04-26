import React from "react";

import { Routes, Route, Outlet } from "react-router-dom";
import { routes } from "./routes";

export const ProductRouter = () => {
  return (
    <Routes>
      {routes
        ?.find((r) => r.path === "*")
        ?.routes?.find((r) => r.path === "product/*")
        ?.routes?.map((route: any, key: number) => {
          const { path, index, IndexComponent: C1, props } = route;
          return (
            <Route
              index={index}
              key={key}
              path={path}
              element={<C1 {...props} />}
            />
          );
        })}
    </Routes>
  );
};
