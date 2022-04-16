import * as React from "react";
import { Route, Routes } from "react-router-dom";
import { App } from "./App";
import { Header } from "./containers/Header";
import { Home, Search } from "./pages";
// import { routes } from "./routes";

export const Root = () => (
  <>
    {/* <Header /> */}
    {/* <Header /> */}
    {/* <Routes>
      {routes.map((route, index) => {
        const { path, component: C1 } = route;
        return (
          <Route key={index} path={path} element={<C1 />}>
            <>
              {route.routes &&
                route.routes?.map((route2: any, index2: number) => {
                  const { path: path2, component: C2 } = route2;
                  return <Route key={index2} path={path2} element={<C2 />} />;
                })}
            </>
          </Route>
        );
      })}
    </Routes> */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="search" element={<Search />} />
      {/* <Route index element={<Home />} /> */}
      {/* </Route> */}
    </Routes>
  </>
);
