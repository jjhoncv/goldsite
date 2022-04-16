import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { routes } from "../../routes";

export const ProductRouter = () => {
  return (
    <>
      <Routes>
        {routes
          .find((route) => route.path === "product/*")
          ?.routes?.map((route: any, index: number) => {
            const { path, element: C1 } = route;
            return <Route key={index} path={path} element={<C1 />} />;
          })}
      </Routes>
    </>
  );
};
