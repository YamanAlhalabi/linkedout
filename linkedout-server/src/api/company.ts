import CompanyType, { CompanyInfo } from "../database/types/companyType";
import {
  create as createCompany,
  modify as modifyCompany,
  find as findCompany,
} from "../database/company";
import { decodeToken } from "../util/auth";

export async function create(token: string, name: string, adminID: string) {
  if (decodeToken(token) == adminID)
    return createCompany({ name: name, adminId: adminID });
  return "invalid_token";
}

export async function modify(
  token: string,
  id: string,
  new_value: CompanyInfo
) {
  if (decodeToken(token) == (await get(id))?.adminId)
    modifyCompany(id, new_value);
  return "invalid-token";
}

export async function get(id: string) {
  return findCompany({ _id: { $eq: id } });
}
export async function find(title: string) {
  return findCompany({ name: { $text: title } });
}
