import ProductListPage from "./ProductListPage";
import ProductEditPage from "./ProductEditPage";
import ProductNewPage from "./ProductNewPage";

export const routesProducts = [
  {
    index: true,
    IndexComponent: ProductListPage.Index,
    fetchData: ProductListPage.getServerSideProps,
  },
  {
    path: ":id",
    IndexComponent: ProductEditPage.Index,
    fetchData: ProductEditPage.getServerSideProps,
  },
  {
    path: "new",
    IndexComponent: ProductNewPage.Index,
    fetchData: ProductNewPage.getServerSideProps,
  },
];
