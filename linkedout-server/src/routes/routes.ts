import offer from "./offer";
import skill from "./skill";
import user from "./user";

export default function loadRoutes() {
  user();
  skill();
  offer();
  company();
}
