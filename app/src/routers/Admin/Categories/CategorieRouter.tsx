import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { routesCategories } from "./routes";
// import { fetchUsers } from "../../services/users";

export const CategorieRouter = () => {
  // const { data, status } = useQuery("users", fetchUsers);

  return (
    <Routes>
      {routesCategories?.map((route: any, key: number) => {
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
