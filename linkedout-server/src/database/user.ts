import { baseFields } from "./common";
import mongoose, { Document } from "mongoose";
import omit from "lodash/omit";
import UserType from "./types/userType";
import { generateSalt, hash } from "../util/cryptography";
import { getLoginToken } from "../util/auth";

const userSchema = new mongoose.Schema<UserType & Document>({
  name: "string",
  profilePicture: "string",
  hash: "string",
  salt: "string",
  email: "string",
  title: "string",
  companyId: "string",
  skills: "array",
  adminOf: "array",
  workingAt: "array",
  workActivities: "array",
  ...baseFields,
});

const User = mongoose.model("User", userSchema);

export async function create(newUser: {
  name: string;
  email: string;
  password: string;
}) {
  const newUserEmail = await find({
    email: { $eq: newUser.email },
  });

  if (newUserEmail) return "duplicate";

  const passwordSalt = generateSalt();
  const passwordHash = hash(newUser.password, passwordSalt);

  const result = await User.insertMany({
    createdAt: new Date(),
    lastUpdatedAt: new Date(),
    active: true,
    name: newUser.name,
    profilePicture:
      "https://pbs.twimg.com/profile_images/474328967508656128/Fx2j0PPk_400x400.jpeg",
    hash: passwordHash,
    salt: passwordSalt,
    email: newUser.email,
    title: "string",
    skills: [],
    workingAt: [],
    workActivities: [],
  });

  return getClientDocument(result[0].toObject());
}

export async function modify(
  id: string,
  newValue: {
    name?: string;
    profilePicture?: string;
    email?: string;
    title?: string;
    companyId?: string;
    skills?: [];
    adminOf?: [];
    workingAt?: [];
    workActivities?: [];
  }
) {
  User.updateOne({ _id: id }, { ...newValue, lastModified: new Date() });
}

export async function find(query: any) {
  const result = await User.findOne(query).exec();
  return getClientDocument(result!);
}

export async function login(email: string, password: string) {
  var user = await User.findOne({ email: { $eq: email } });

  if (!user) return "user_not_found";

  if (hash(password, user.salt) != user.hash) return "invalid_password";

  return getLoginToken(user._id);
}

function getClientDocument(doc: UserType) {
  return (doc ? omit(doc, ["hash", "salt"]) : doc) as UserType;
}
