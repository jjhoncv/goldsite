import { QueryClient, dehydrate } from "react-query";
import {
  Contact,
  Home,
  NotFound,
  Admin,
  Products,
  Search,
  Product,
  ProductsAll,
  ProductEdit,
  ProductNew,
  CategorieEdit,
  CategorieNew,
  Categories,
  CategoriesAll,
} from "./pages";
import { fetchUsers } from "./services/users";

import { Request } from "express";

import { fetchSearch } from "./services/search";
import { fetchProduct } from "./services/product";
import { ProductRouter } from "./pages/Product/ProductRouter";
import { ProductMe } from "./pages/ProductMe";
import { Dashboard } from "./pages/Admin/Dashboard";

import { RouteObject } from "react-router-dom";
import { AdminMe } from "./pages/Admin/AdminMe";

const queryClient = new QueryClient();

export interface Route extends RouteObject {
  fetchData?: Function;
  routes?: Route[];
  validation?: Function;
}

export const routes: Route[] = [
  {
    element: Home,
    path: "/",
    fetchData: async () => {
      await queryClient.prefetchQuery("users", fetchUsers);
      return dehydrate(queryClient);
    },
  },
  {
    path: "search",
    element: Search,
    fetchData: async (req: Request) => {
      const q = req.query?.q?.toString() || "";
      await queryClient.prefetchQuery(["search", q], () => fetchSearch(q));
      return dehydrate(queryClient);
    },
  },
  {
    path: "product/*",
    element: ProductRouter,
    routes: [
      {
        element: Product,
        path: ":id",
        // validation: (path: string) => {
        //   const lastArg = path.split("/").pop() || "";
        //   return /^\d+$/.test(lastArg);
        // },
        fetchData: async (req: Request) => {
          const id = req.path.split("/").pop();
          // const id = "1";

          await queryClient.prefetchQuery(["product", id], () =>
            fetchProduct(id)
          );
          return dehydrate(queryClient);
        },
      },
      {
        element: ProductMe,
        path: "me",
        fetchData: async () => {
          console.log("fetch product me");
          return Promise.resolve();
        },
      },
    ],
  },

  {
    path: "contact",
    element: Contact,
  },
  {
    path: "admin/*",
    element: Admin,
    routes: [
      {
        element: Dashboard,
        index: true,
        fetchData: async () => {
          console.log("fetch dashboard admin");
          return Promise.resolve();
        },
      },
      {
        path: "me",
        element: AdminMe,
        fetchData: async () => {
          console.log("fetch admin Me");
          return Promise.resolve();
        },
      },
      {
        element: Categories,
        path: "categories/*",
        routes: [
          {
            element: CategoriesAll,
            index: true,
            fetchData: async () => {
              console.log("fetch categories all admin");
              return Promise.resolve();
            },
          },
          {
            path: ":id",
            element: CategorieEdit,
            fetchData: async () => {
              console.log("fetch categorie edit admin");
              return Promise.resolve();
            },
          },
          {
            path: "new",
            element: CategorieNew,
            fetchData: async () => {
              console.log("fetch categorie new admin");
              return Promise.resolve();
            },
          },
        ],
      },
      {
        element: Products,
        path: "products/*",
        routes: [
          {
            element: ProductsAll,
            index: true,
            fetchData: async () => {
              console.log("fetch products all admin");
              return Promise.resolve();
            },
          },
          {
            path: ":id",
            element: ProductEdit,
            fetchData: async () => {
              console.log("fetch product edit admin");
              return Promise.resolve();
            },
          },
          {
            path: "new",
            element: ProductNew,
            fetchData: async () => {
              console.log("fetch product new admin");
              return Promise.resolve();
            },
          },
        ],
      },
    ],
  },
  {
    element: NotFound,
    path: "*",
  },
];
