import { create, modify, get, find } from "../api/offer";
import { getRoutes, postRoutes } from "./router";

export default function offer() {
  /* --GET REQUESTS-- */
  postRoutes["/api/offer/create"] = { action: create };
  postRoutes["/api/offer/modify"] = { action: modify };

  /* --GET REQUESTS-- */
  getRoutes["/api/offer/get"] = { action: get };
  getRoutes["/api/offer/find"] = { action: find };
}
