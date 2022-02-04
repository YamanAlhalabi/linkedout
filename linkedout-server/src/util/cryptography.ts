import crypto from "crypto";

export function generateSalt(length = 32) {
  return crypto
    .randomBytes(Math.ceil(length / 2))
    .toString("hex")
    .slice(0, length);
}

export function hash(password: string, salt: string) {
  const hash = crypto.createHmac("sha512", salt);
  hash.update(password);

  const value = hash.digest("hex");

  return value;
}
