import * as React from "react";
// import { useQuery } from "react-query";
import { Route, Routes } from "react-router-dom";
import { HeaderAdmin } from "./../../shared/components/Header";

import { routesAdmin } from "./routes";
// import { routes } from "../../routes";
// import { fetchUsers } from "../../services/users";

export const AdminRouter = () => {
  // const { data, status } = useQuery("users", fetchUsers);

  return (
    <>
      <HeaderAdmin />
      <Routes>
        {routesAdmin?.map((route: any, key: number) => {
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
