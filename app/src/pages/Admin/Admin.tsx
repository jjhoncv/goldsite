import * as React from "react";
import { useQuery } from "react-query";
import { Link, Route, Routes } from "react-router-dom";
import { HeaderAdmin } from "../../containers/Header/HeaderAdmin";
import { routes } from "../../routes";
// import { routes } from "../../routes";
import { fetchUsers } from "../../services/users";

import "./admin.css";
export const Admin = () => {
  // const { data, status } = useQuery("users", fetchUsers);

  return (
    <>
      <HeaderAdmin />
      <Routes>
        {routes
          .find((route) => route.path === "admin/*")
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
