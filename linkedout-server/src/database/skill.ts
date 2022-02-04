import mongoose, { Document } from "mongoose";
import { baseFields } from "./common";
import SkillType from "./types/skillType";

const skillSchema = new mongoose.Schema<SkillType & Document>({
  title: "string",
  timeExperince: "date",
  ...baseFields,
});

const Skill = mongoose.model("Skill", skillSchema);

export async function create(title: string, experince: Date) {
  return await Skill.insertMany({
    title: title,
    timeExperince: experince,
  });
}

export async function find(query: any) {
  const result = await Skill.findOne(query).exec();
}
