import {
  create as createOffer,
  find as findOffer,
  modify as modifyOffer,
  interact as interactWithOffer,
} from "../database/offer";

import OfferType, { Interaction } from "../database/types/offerType";
import SkillType from "../database/types/skillType";
import { decodeToken } from "../util/auth";

export async function create(token: string, requiredSkills: SkillType[]) {
  if (token) createOffer(requiredSkills);
}

export async function modify(
  token: string,
  admin: string,
  id: string,
  newValue: SkillType[]
) {
  if (decodeToken(token) == admin) modifyOffer(id, newValue);
}

export async function get(id: string) {
  return findOffer({ id: { $eq: id } });
}

export async function find(title: string) {
  return findOffer({ title: { $text: title } });
}

export async function interact(offerId: string, interaction: Interaction) {
  interactWithOffer(offerId, interaction);
}
