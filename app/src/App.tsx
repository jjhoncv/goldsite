import * as React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { Header } from "./containers/Header";
import { Contact, Home, Search } from "./pages";
import { routes } from "./routes";

export const App = () => (
  <>
    {/* <Header /> */}
    {/* <Outlet /> */}
    <Routes>
      {routes.map((route: any, index) => {
        const { path, element: C1 } = route;
        return (
          <Route key={index} path={path} element={<C1 />}>
            <>
              {route.routes &&
                route.routes?.map((route2: any, index2: number) => {
                  const { path: path2, element: C2 } = route2;
                  return <Route key={index2} path={path2} element={<C2 />} />;
                })}
            </>
          </Route>
        );
      })}
    </Routes>

    {/* <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/contact" element={<Contact />} />
    </Routes> */}
  </>
);
