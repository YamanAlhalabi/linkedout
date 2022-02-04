import { Request, Response } from "express";
import {
  create as createOffer,
  find as findOffer,
  modify as modifyOffer,
  interact as interactWithOffer,
} from "../database/offer";

import { decodeToken } from "../util/auth";

export async function create(request: Request, response: Response) {
  const { token, requiredSkills } = request.body;
  if (token) createOffer(requiredSkills);
}

export async function modify(request: Request, response: Response) {
  const { token, admin, id, newValue } = request.body;
  if (decodeToken(token) == admin) modifyOffer(id, newValue);
}

export async function get(request: Request, response: Response) {
  const { id } = request.body;
  return findOffer({ id: { $eq: id } });
}

export async function find(request: Request, response: Response) {
  const { title } = request.body;
  return findOffer({ title: { $text: title } });
}

export async function interact(request: Request, response: Response) {
  const { offerId, interaction } = request.body;
  interactWithOffer(offerId, interaction);
}
