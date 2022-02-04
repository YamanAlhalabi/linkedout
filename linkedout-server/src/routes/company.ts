import { create, modify, get, find } from "../api/company";
import { getRoutes, postRoutes } from "./router";

export default function company() {
  /* --GET REQUESTS-- */
  postRoutes["/api/company/create"] = { action: create };
  postRoutes["/api/company/modify"] = { action: modify };

  /* --GET REQUESTS-- */
  getRoutes["/api/company/get"] = { action: get };
  getRoutes["/api/company/find"] = { action: find };
}
