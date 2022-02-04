import mongoose, { Document } from "mongoose";
import { find as findUser } from "./user";
import { baseFields } from "./common";
import CompanyType from "./types/companyType";

const companySchema = new mongoose.Schema<CompanyType & Document>({
  name: "string",
  adminId: "string",
  info: {
    logoUrl: "string",
    workTitle: "string",
    description: "string",
    email: "string",
    website: "string",
    phone: [],
  },
  ...baseFields,
});

const Company = mongoose.model("Company", companySchema);
export async function modify(
  id: string,
  newValue: {
    name?: "string";
    adminId?: "string";
    info?: {
      logoUrl?: "string";
      workTitle?: "string";
      description?: "string";
      email?: "string";
      website?: "string";
      phone?: [];
    };
  }
) {
  Company.updateOne(
    { _id: id },
    {
      ...newValue,
      lastModified: new Date(),
    }
  );
}
export async function create(newCompany: { name: string; adminId: string }) {
  if (!(await findUser({ _id: { $eq: newCompany.adminId } })))
    return "invalid_admin";

  var result = await Company.insertMany({
    name: newCompany.name,
    adminId: newCompany.adminId,
  });

  return result[0].toObject();
}

export async function find(query: any) {
  return await Company.findOne(query).exec();
}
