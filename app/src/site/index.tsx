import express from "express";
import cors from "cors";
import { controller } from "./ssr";
import path from "path";
import { apiRoutes } from "./pages/api";
import manifestHelpers from "express-manifest-helpers";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRoutes);
app.use(express.static(path.join(__dirname, "./public")));

app.use(
  manifestHelpers({
    manifestPath: path.join(__dirname, "./manifest.json"),
  })
);

app.get("*", controller);

const PORT = process.env.PORT || 3000;

process.on("unhandledRejection", function (err: any) {
  throw err;
});

process.on("uncaughtException", function (err) {
  console.log(err);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
