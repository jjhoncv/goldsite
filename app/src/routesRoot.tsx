import React from "react";

import { RouteObject } from "react-router-dom";

import { AppRouter } from "./routers/AppRouter";
import { routesApp } from "./routers/routesApp";

export interface Route extends RouteObject {
  fetchData?: Function;
  routes?: Route[];
  validation?: Function;
  IndexComponent?: React.ReactNode;
}

export const routesRoot: Route[] = [
  {
    path: "*",
    IndexComponent: AppRouter,
    routes: routesApp,
  },

  // {
  //   path: "/",
  //   fetchData: HomePage.getServerSideProps,
  //   IndexComponent: HomePage.Index,
  // },
  // {
  //   path: "search",
  //   fetchData: SearchPage.getServerSideProps,
  //   IndexComponent: SearchPage.Index,
  // },
  // {
  //   path: "product/*",
  //   IndexComponent: ProductRouter,
  //   routes: [
  //     {
  //       path: ":id",
  //       fetchData: ProductPage.getServerSideProps,
  //       IndexComponent: ProductPage.Index,
  //     },
  //     {
  //       path: "me",
  //       fetchData: ProductMePage.getServerSideProps,
  //       IndexComponent: ProductMePage.Index,
  //     },
  //   ],
  // },
  // {
  //   path: "contact",
  //   IndexComponent: ContactPage.Index,
  // },
  // {
  //   path: "product/*",
  //   IndexComponent: ProductRouter,
  //   routes: [
  //     {
  //       path: ":id",
  //       fetchData: ProductPage.getServerSideProps,
  //       IndexComponent: ProductPage.Index,
  //     },
  //   ],
  // },
  // {
  //   path: "*",
  //   IndexComponent: page404.Index,
  // },

  // {
  //   path: "admin/*",
  //   IndexComponent: Admin,
  //   routes: [
  //     {
  //       index: true,
  //       IndexComponent: DashboardPage.Index,
  //       fetchData: DashboardPage.getServerSideProps,
  //     },
  //     {
  //       path: "me",
  //       IndexComponent: AdminMePage.Index,
  //       fetchData: AdminMePage.getServerSideProps,
  //     },
  //     {
  //       path: "categories/*",
  //       IndexComponent: Categories,
  //       routes: [
  //         // {
  //         //   index: true,
  //         //   IndexComponent: CategoriesAllPage.Index,
  //         //   fetchData: CategoriesAllPage.getServerSideProps,
  //         // },
  //         {
  //           path: ":id",
  //           IndexComponent: CategorieEditPage.Index,
  //           fetchData: CategorieEditPage.getServerSideProps,
  //         },
  //         {
  //           path: "new",
  //           IndexComponent: CategorieNewPage.Index,
  //           fetchData: CategorieNewPage.getServerSideProps,
  //         },
  //       ],
  //     },
  //     {
  //       element: Products,
  //       path: "products/*",
  //       routes: [
  //         // {
  //         //   index: true,
  //         //   IndexComponent: ProductsAllPage.Index,
  //         //   fetchData: ProductsAllPage.getServerSideProps,
  //         // },
  //         {
  //           path: ":id",
  //           IndexComponent: ProductEditPage.Index,
  //           fetchData: ProductEditPage.getServerSideProps,
  //         },
  //         {
  //           path: "new",
  //           IndexComponent: ProductNewPage.Index,
  //           fetchData: ProductNewPage.getServerSideProps,
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   path: "*",
  //   IndexComponent: page404.Index,
  // },

  // {
  //   path: "product/*",
  //   element: ProductRouter,
  //   routes: [
  //     {
  //       // element: Product,
  //       fetchData: getServerSidePropsProduct,
  //       IndexComponent: IndexProduct,
  //       path: ":id",
  //       // validation: (req: Request) => {
  //       //   const id = req.path.split("/").pop() || "";
  //       //   return isString(id);
  //       // },
  //     },
  //   ],
  // },
  // {
  //   path: "search",
  //   element: Search,
  //   fetchData: async (req: Request) => {
  //     const q = req.query?.q?.toString() || "";
  //     await queryClient.prefetchQuery(["search", q], () => fetchSearch(q));
  //     return dehydrate(queryClient);
  //   },
  // },
  // {
  //   path: "product/*",
  //   element: ProductRouter,
  //   routes: [
  //     {
  //       element: Product,
  //       path: ":id",
  //       validation: (req: Request) => {
  //         const id = req.path.split("/").pop() || "";
  //         return isString(id);
  //       },
  //       fetchData: async (req: Request, res: Response) => {
  //         const id = req.path.split("/").pop();
  //         // try {
  //         let status = true;
  //         let code = 200;
  //         await queryClient.prefetchQuery(["product", id], async () => {
  //           const response = await fetchProduct(id);
  //           // console.log(response);
  //           if (response?.status === false) {
  //             status = response.status;
  //             // console.log("here!");
  //             // res.send(renderer({ Component: ErrorPage, req }));
  //             // return;
  //           }
  //           return response;
  //         });
  //         // } catch (e) {
  //         //   console.log(e);
  //         // }

  //         return {
  //           statusRequest: {
  //             status,
  //             code,
  //           },
  //           state: dehydrate(queryClient),
  //         };
  //       },
  //     },
  //     {
  //       element: ProductMe,
  //       path: "me",
  //       fetchData: async () => {
  //         console.log("fetch product me");
  //         return Promise.resolve();
  //       },
  //     },
  //   ],
  // },

  // {
  //   path: "contact",
  //   element: Contact,
  // },
  // {
  //   path: "admin/*",
  //   element: Admin,
  //   routes: [
  //     {
  //       element: Dashboard,
  //       index: true,
  //       fetchData: async () => {
  //         console.log("fetch dashboard admin");
  //         return Promise.resolve();
  //       },
  //     },
  //     {
  //       path: "me",
  //       element: AdminMe,
  //       fetchData: async () => {
  //         console.log("fetch admin Me");
  //         return Promise.resolve();
  //       },
  //     },
  //     {
  //       element: Categories,
  //       path: "categories/*",
  //       routes: [
  //         {
  //           element: CategoriesAll,
  //           index: true,
  //           fetchData: async () => {
  //             console.log("fetch categories all admin");
  //             return Promise.resolve();
  //           },
  //         },
  //         {
  //           path: ":id",
  //           element: CategorieEdit,
  //           fetchData: async () => {
  //             console.log("fetch categorie edit admin");
  //             return Promise.resolve();
  //           },
  //         },
  //         {
  //           path: "new",
  //           element: CategorieNew,
  //           fetchData: async () => {
  //             console.log("fetch categorie new admin");
  //             return Promise.resolve();
  //           },
  //         },
  //       ],
  //     },
  //     {
  //       element: Products,
  //       path: "products/*",
  //       routes: [
  //         {
  //           element: ProductsAll,
  //           index: true,
  //           fetchData: async () => {
  //             console.log("fetch products all admin");
  //             return Promise.resolve();
  //           },
  //         },
  //         {
  //           path: ":id",
  //           element: ProductEdit,
  //           fetchData: async () => {
  //             console.log("fetch product edit admin");
  //             return Promise.resolve();
  //           },
  //         },
  //         {
  //           path: "new",
  //           element: ProductNew,
  //           fetchData: async () => {
  //             console.log("fetch product new admin");
  //             return Promise.resolve();
  //           },
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   element: NotFound,
  //   path: "*",
  // },
];
