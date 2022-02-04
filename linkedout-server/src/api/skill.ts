import { create as createSkill, find as findSkill } from "../database/skill";
import { decodeToken } from "../util/auth";

export async function create(token: string, title: string, experince: Date) {
  if (decodeToken(token)) createSkill(title, experince);
}
export async function get(id: string) {
  return findSkill({ _id: { $eq: id } });
}
export async function find(title: string) {
  return findSkill({ tile: { $text: title } });
}
