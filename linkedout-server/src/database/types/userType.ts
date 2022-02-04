import { BasicType as BaseFields } from "../common";

export default interface UserType extends BaseFields {
  name: string;
  profilePicture: string;
  hash: string;
  salt: string;
  email: string;
  title: string;
  companyId?: string;
  skills: string[];
  adminOf: string[];
  workingAt: string[];
  workActivities: WorkActivity[];
}

export interface WorkActivity {
  start: Date;
  end?: Date;
  active: boolean;
  at: string;
}
