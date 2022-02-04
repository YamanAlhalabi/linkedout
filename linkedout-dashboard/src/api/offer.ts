import OfferType from "./types/offerType";
import SkillType from "./types/skillType";

async function create(token: string, requiredSkills: SkillType[]) {}
async function modify(
  token: string,
  admin: string,
  id: string,
  newValue: OfferType
) {}
async function get(id: string) {}
async function find(title: string) {}

export { create, modify, get, find };
