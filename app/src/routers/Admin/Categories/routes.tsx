import CategorieListPage from "./CategorieListPage";
import CategorieEditPage from "./CategorieEditPage";
import CategorieNewPage from "./CategorieNewPage";

export const routesCategories = [
  {
    index: true,
    IndexComponent: CategorieListPage.Index,
    fetchData: CategorieListPage.getServerSideProps,
  },
  {
    path: ":id",
    IndexComponent: CategorieEditPage.Index,
    fetchData: CategorieEditPage.getServerSideProps,
  },
  {
    path: "new",
    IndexComponent: CategorieNewPage.Index,
    fetchData: CategorieNewPage.getServerSideProps,
  },
];
