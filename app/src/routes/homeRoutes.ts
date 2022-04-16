import { Router, Request, Response } from "express";
import { dehydrate, QueryClient } from "react-query";
import { renderer } from "../helpers";
// import { routes } from "../routes";
import { fetchUsers } from "../services/users";
// import { SSR } from "../../middleware/ssr";
// import { Home } from "../../../client/view/Home";
// import { Banner } from "../../model/banner";

const route: Router = Router();

route.get("/", async (req: Request, res: Response) => {
  // route.get("/", async (req: Request, res: Response) => {
  const queryClient = (res as any).queryCliente;

  console.log("home server");
  // console.log({ queryClient });

  await queryClient.prefetchQuery("users", fetchUsers);
  const dehydratedState = dehydrate(queryClient);

  const content = renderer(dehydratedState, req);
  res.send(content);
  queryClient.clear();

  // const data: any = {};
  // const banner = Banner();
  // data.banners = await banner.getAll();
  // SSR({ res, data, Component: Home, view: "home" });
});

export const homeRoutes = route;
