import {
  createUser,
  findUser,
  getUser,
  loginUser,
  modifyUser,
} from "../api/user";

import { getRoutes, postRoutes } from "./router";

export default function user() {
  /* --POST REQUESTS-- */

  postRoutes["/api/user/create"] = { action: createUser };
  postRoutes["/api/user/modify"] = { action: modifyUser };
  postRoutes["/api/user/login"] = { action: loginUser };

  /* --GET REQUESTS-- */

  getRoutes["/api/user/get"] = { action: getUser };
  getRoutes["/api/user/find"] = { action: findUser };
}
