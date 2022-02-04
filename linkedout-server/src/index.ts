import express from "express";
import { create } from "./database/user";
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
create({
  name: "yaman",
  email: `Hello${generateGarbage(4)}@gmail.com`,
  password: "very stronk password",
}).then((data) => console.log(data));

app.listen(3000, () => {
  console.log(`server is running on port ${port}`);
});

function generateGarbage(length: number) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result.toUpperCase();
}
