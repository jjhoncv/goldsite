import express from "express";
import cors from "cors";
import { controller } from "./helpers";
import { Router } from "express";
import { homeRoutes } from "./routes/homeRoutes";
import { searchRoutes } from "./routes/searchRoutes";
import { QueryClient } from "react-query";
import { apiRoutes } from "./routes/apiRoutes";

const app = express();
const router = Router();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get(/\.(js|css|map|ico)$/, express.static("build"));

// router.use("/search", searchRoutes);
// router.use("/", homeRoutes);
app.get("*", controller);
// app.get("/api", apiRoutes);
// app.use((req, res, next) => {
//   (res as any).queryCliente = new QueryClient();
//   next();
//   // const queryClient = new QueryClient();
// });
// app.use("/", router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
