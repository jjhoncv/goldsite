import express from "express";
import cors from "cors";
import { controller } from "./helpers";
import path from "path";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/admin/*", express.static("dist/admin"));
app.use(express.static("public"));

// app.get(/\.(js|css|map|ico|jpg|jpeg|png|gif|json)$/, express.static("dist"));

app.get("*", controller);

const PORT = process.env.PORT || 3000;

process.on("unhandledRejection", function (err: any) {
  throw err;
});

process.on("uncaughtException", function (err) {
  console.log(err);
});

app.listen(3000, "0.0.0.0", () => {
  console.log(`Server is listening on port: ${PORT}`);
});
