import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { routesApp } from "./routesApp";

export const AppRouter = () => {
  return (
    <Routes>
      {routesApp?.map((route: any, key: number) => {
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
