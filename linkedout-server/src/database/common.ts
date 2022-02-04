export interface BasicType {
  _id: string;
  createdAt: Date;
  lastUpdatedAt: Date;
  active?: number;
}

export const baseFields = {
  _id: "string",
  createdAt: "string",
  lastUpdatedAt: "string",
  active: "string",
};

export function generateID() {}
