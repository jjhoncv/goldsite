import * as React from "react";
import { useQuery } from "react-query";
import { Routes, Route } from "react-router-dom";
import { routesProducts } from "./routes";
// import { fetchUsers } from "../../services/users";

export const ProductRouter = () => {
  // const { data, status } = useQuery("users", fetchUsers);

  return (
    <>
      {/* <h1>Products</h1> */}
      <Routes>
        {routesProducts?.map((route: any, key: number) => {
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
    </>
  );
};
