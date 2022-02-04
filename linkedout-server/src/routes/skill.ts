import { getRoutes, postRoutes } from "./router";

export default function skill() {
  /* --GET REQUESTS-- */
  getRoutes["/api/skill/create"] = { action: getUser };
  getRoutes["/api/skill/get"] = { action: find };
  getRoutes["/api/skill/find"] = { action: find };
}
