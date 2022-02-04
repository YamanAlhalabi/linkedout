import mongoose, { Document } from "mongoose";
import user from "../routes/user";
import { baseFields } from "./common";
import OfferType, { Interaction } from "./types/offerType";
import SkillType from "./types/skillType";

const offerSchema = new mongoose.Schema<OfferType & Document>({
  requiredSkills: [],
  interactions: [],
  ...baseFields,
});
const Offer = mongoose.model("Offer", offerSchema);

export async function find(query: any) {
  return await Offer.findOne(query).exec();
}
export async function modify(
  id: string,
  requiredSkills?: [],
  interactions?: []
) {
  Offer.updateOne(
    { _id: id },
    {
      requiredSkills: requiredSkills,
      interactions: interactions,
      lastModified: new Date(),
    }
  );
}
export async function create(skills: SkillType[]) {
  Offer.insertMany({
    requiredSkills: skills,
    interactions: [],
  });
}

export async function interact(offerId: string, interaction: Interaction) {
  var offer = await find({ _id: { $eq: offerId } });
  if (!offer) return "not_found";

  offer.interactions.push(interaction);
}
