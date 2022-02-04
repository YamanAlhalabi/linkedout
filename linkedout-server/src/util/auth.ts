import jwt from "jsonwebtoken";
import config from "config";

export function generateSignedToken(data: object): string {
  const payload = { ...data, signingDate: new Date() };
  const token = jwt.sign(payload, config.get("privateKey"), {
    algorithm: "RS256",
  });

  return token as string;
}

export function getLoginToken(userId: string) {
  const token = generateSignedToken({ userId, purpose: "login please" });

  return token;
}

export function decodeToken(token: string): Record<string, any> {
  return jwt.decode(token) as any;
}
