import { create, modify, login, get, find } from "../api/user";

import { getRoutes, postRoutes } from "./router";

export default function user() {
  /* --POST REQUESTS-- */

  postRoutes["/api/user/create"] = { action: create };
  postRoutes["/api/user/modify"] = { action: modify };
  postRoutes["/api/user/login"] = { action: login };

  /* --GET REQUESTS-- */

  getRoutes["/api/user/get"] = { action: get };
  getRoutes["/api/user/find"] = { action: find };
}
