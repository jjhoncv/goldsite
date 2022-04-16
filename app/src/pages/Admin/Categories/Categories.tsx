import * as React from "react";
import { useQuery } from "react-query";
import { Routes, Route } from "react-router-dom";
import { routes } from "../../../routes";
// import { fetchUsers } from "../../services/users";

import "./categories.css";
export const Categories = () => {
  // const { data, status } = useQuery("users", fetchUsers);

  return (
    <>
      {/* <h1>Products</h1> */}
      <Routes>
        {routes
          .find((route) => route.path === "admin/*")
          ?.routes?.find((route) => route.path === "categories/*")
          ?.routes?.map((route: any, key: number) => {
            const { path, index, element: C1 } = route;
            return (
              <Route index={index} key={key} path={path} element={<C1 />} />
            );
          })}
      </Routes>
    </>
  );
};
