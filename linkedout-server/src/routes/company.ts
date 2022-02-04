import { getRoutes, postRoutes } from "./router";

export default function company() {
  /* --GET REQUESTS-- */
  postRoutes["/api/company/create"] = { action: getUser };
  postRoutes["/api/company/modify"] = { action: getUser };

  /* --GET REQUESTS-- */
  getRoutes["/api/company/get"] = { action: find };
  getRoutes["/api/company/find"] = { action: find };
}
