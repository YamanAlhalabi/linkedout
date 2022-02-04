import { getRoutes, postRoutes } from "./router";

export default function offer() {
  /* --GET REQUESTS-- */
  postRoutes["/api/offer/create"] = { action: getUser };
  postRoutes["/api/offer/modify"] = { action: getUser };

  /* --GET REQUESTS-- */
  getRoutes["/api/offer/get"] = { action: find };
  getRoutes["/api/offer/find"] = { action: find };
}
