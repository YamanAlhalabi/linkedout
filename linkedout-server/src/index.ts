import express from "express";
import connect from "./mongo";
import { apiRouter, createRoutes } from "./routes/router";
import loadRoutes from "./routes/routes";

const port = 3030;

loadRoutes();
createRoutes();

const app = express();

connect();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());
app.use(apiRouter);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
