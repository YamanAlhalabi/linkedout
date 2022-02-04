import express, { Request, Response } from "express";

const router = express.Router();

interface Route {
  resources?: [];
  action: { (request: Request, response: Response): void };
}

const post: { [path: string]: Route } = {};
const get: { [path: string]: Route } = {};

export function createRoutes() {
  for (let path in post) {
    console.log(`mapping POST \"${path}\"`);
    router.post(path, post[path].resources || [], post[path].action);
  }

  for (let path in get) {
    console.log(`mapping GET \"${path}\"`);
    router.get(path, get[path].resources || [], get[path].action);
  }
}

export { router as apiRouter };
export { post as postRoutes };
export { get as getRoutes };
