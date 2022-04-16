import { Router, Request, Response } from "express";
import { dehydrate, QueryClient } from "react-query";
import { renderer } from "../helpers";
import { fetchSearch } from "../services/search";
// import { fetchUsers } from "../services/users";
// import { SSR } from "../../middleware/ssr";
// import { Home } from "../../../client/view/Home";
// import { Banner } from "../../model/banner";

const route: Router = Router();

route.get("/", async (req: Request, res: Response) => {
  // const queryClient = new QueryClient();
  const queryClient = (res as any).queryCliente;

  // console.log({ queryClient });

  // const q = "";
  // await queryClient.prefetchQuery(["search", q], () => fetchSearch(q));
  const dehydratedState = "";

  // await queryClient.prefetchQuery("users", fetchUsers);
  // const dehydratedState = dehydrate(queryClient);

  const content = renderer(dehydratedState, req);
  res.send(content);
  queryClient.clear();
});

export const contactRoutes = route;
