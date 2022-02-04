import { create as createSkill, find as findSkill } from "../database/skill";
import { decodeToken } from "../util/auth";
import { Request, Response } from "express";

export async function create(request: Request, response: Response) {
  const { token, title, experince } = request.body;

  if (decodeToken(token)) createSkill(title, experince);
}
export async function get(request: Request, response: Response) {
  const { id } = request.body;
  return findSkill({ _id: { $eq: id } });
}
export async function find(request: Request, response: Response) {
  const { title } = request.body;
  return findSkill({ tile: { $text: title } });
}
