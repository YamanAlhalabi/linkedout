import { BasicType } from "../common";

export default interface CompanyType extends BasicType {
  name: string;
  adminId: string;
  info: CompanyInfo;
}

export interface CompanyInfo {
  logoUrl?: string;
  workTitle?: string;
  description?: string;
  email?: string;
  website?: string;
  phone?: { name: string; number: string }[];
}
