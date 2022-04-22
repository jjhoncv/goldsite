import HomePage from "./Home/HomePage";
import SearchPage from "./Search/SearchPage";
import ContactPage from "./Contact/ContactPage";
import { ProductRouter, routesProduct } from "./Product";
import { AdminRouter, routesAdmin } from "./Admin";

import page404 from "./../shared/pages/page404";

export const routesApp = [
  {
    path: "search",
    fetchData: SearchPage.getServerSideProps,
    IndexComponent: SearchPage.Index,
  },
  {
    path: "contact",
    IndexComponent: ContactPage.Index,
  },
  {
    path: "product/*",
    IndexComponent: ProductRouter,
    routes: routesProduct,
  },
  {
    path: "admin/*",
    IndexComponent: AdminRouter,
    routes: routesAdmin,
  },
  {
    index: true,
    fetchData: HomePage.getServerSideProps,
    IndexComponent: HomePage.Index,
  },
  {
    path: "*",
    IndexComponent: page404.Index,
  },
];
