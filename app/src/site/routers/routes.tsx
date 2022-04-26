import {
  SearchPage,
  ContactPage,
  ProductPage,
  HomePage,
  ErrorPage,
} from "./../pages";

import { IRoute } from "./../shared/interfaces/route.interface";
import { ProductRouter } from "./ProductRouter";
import { SiteRouter } from "./SiteRouter";

export const routes: IRoute[] = [
  {
    path: "*",
    IndexComponent: SiteRouter,
    routes: [
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
        routes: [
          {
            path: ":id",
            fetchData: ProductPage.getServerSideProps,
            IndexComponent: ProductPage.Index,
          },
          {
            path: "*",
            IndexComponent: ErrorPage.Index,
          },
        ],
      },
      {
        index: true,
        fetchData: HomePage.getServerSideProps,
        IndexComponent: HomePage.Index,
      },
      {
        path: "*",
        IndexComponent: ErrorPage.Index,
      },
    ],
  },
];
