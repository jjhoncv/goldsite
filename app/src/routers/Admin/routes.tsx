import DashboardPage from "./Dashboard/DashboarPage";
import AdminMePage from "./AdminMe/AdminMePage";

import { CategorieRouter, routesCategories } from "./Categories";
import { ProductRouter, routesProducts } from "./Products";

export const routesAdmin = [
  {
    index: true,
    IndexComponent: DashboardPage.Index,
    fetchData: DashboardPage.getServerSideProps,
  },
  {
    path: "me",
    IndexComponent: AdminMePage.Index,
    fetchData: AdminMePage.getServerSideProps,
  },
  {
    path: "categories/*",
    IndexComponent: CategorieRouter,
    routes: routesCategories,
  },
  {
    path: "products/*",
    IndexComponent: ProductRouter,
    routes: routesProducts,
  },
];
