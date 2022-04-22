import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { routesProduct } from "./routes";

export const ProductRouter = () => {
  return (
    <Routes>
      {routesProduct?.map((route: any, index: number) => {
        const { path, IndexComponent: C1, props } = route;
        return <Route key={index} path={path} element={<C1 {...props} />} />;
      })}
    </Routes>
  );
};
