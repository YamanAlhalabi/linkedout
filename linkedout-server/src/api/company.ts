import {
  create as createCompany,
  modify as modifyCompany,
  find as findCompany,
} from "../database/company";
import { decodeToken } from "../util/auth";
import { Request, Response } from "express";

export async function create(request: Request, response: Response) {
  const { token, name, adminID } = request.body;

  if (decodeToken(token) == adminID)
    return createCompany({ name: name, adminId: adminID });
  return "invalid_token";
}

export async function modify(request: Request, response: Response) {
  const { token, id, new_value } = request.body;

  if (decodeToken(token) == (await findCompany(id))?.adminId)
    modifyCompany(id, new_value);
  return "invalid-token";
}

export async function get(request: Request, response: Response) {
  const { id } = request.body;
  return findCompany({ _id: { $eq: id } });
}
export async function find(request: Request, response: Response) {
  const { title } = request.body;
  return findCompany({ name: { $text: title } });
}
