import { create, get, find } from "../api/skill";
import { getRoutes, postRoutes } from "./router";

export default function skill() {
  /* --POST REQUESTS-- */
  postRoutes["/api/skill/create"] = { action: create };

  /* --GET REQUESTS-- */
  getRoutes["/api/skill/get"] = { action: get };
  getRoutes["/api/skill/find"] = { action: find };
}
