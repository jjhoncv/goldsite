import { Router, Request, Response } from "express";
// import { authRoutes } from "./authRoutes";
// import { homeRoutes } from "./homeRoutes";
import { productsRoutes } from "./product";

const route: Router = Router();

// route.use("/auth", authRoutes);
route.use("/products", productsRoutes);
route.use("/", (req: Request, res: Response) => {
  res.send("<h1>Site Web - Api</h1>");
});

export const apiRoutes = route;
