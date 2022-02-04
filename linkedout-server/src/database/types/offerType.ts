import { BasicType } from "../common";

export default interface OfferType extends BasicType {
  requiredSkills: string[];
  interactions: Interaction[];
}

export interface Interaction {
  author: string;
  type: string;
  contents: object;
}
