import ProductPage from "./ProductPage";
import page404 from "./../../shared/pages/page404";

export const routesProduct = [
  {
    path: ":id",
    fetchData: ProductPage.getServerSideProps,
    IndexComponent: ProductPage.Index,
  },
  {
    path: "*",
    IndexComponent: page404.Index,
  },
];
