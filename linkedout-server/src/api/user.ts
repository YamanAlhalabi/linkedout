import { Request, Response } from "express";
import {
  create as createUser,
  find as findUser,
  login as loginUser,
  modify as modifyUser,
} from "../database/user";
import {
  checkForWeirdCharacters,
  handleErorr,
  validateEmail,
} from "../util/api";

async function create(request: Request, response: Response) {
  const { name, email, password } = request.body;

  if (checkForWeirdCharacters(name)) {
    handleErorr("invalid name", response);
    return;
  }
  if (!validateEmail(email)) {
    handleErorr("invalid email", response);
    return;
  }

  createUser({ name: name, email: email, password: password });
}

async function modify(request: Request, response: Response) {
  const { token, data } = request.body;
  if (!token) {
    handleErorr("bad token", response);
  }

  modifyUser(token, data);
}

async function login(request: Request, response: Response) {
  const { email, password } = request.body;

  var token = await loginUser(email, password);

  response.send(token);
}

async function get(request: Request, response: Response) {
  const { id } = request.body;
  var queryResult = await findUser({ _id: { $eq: id } });
  response.send(queryResult);
}

async function find(request: Request, response: Response) {
  const { name } = request.body;
  var queryResult = await findUser({ name: { $text: name } });
  response.send(queryResult);
}

export { create, modify, login, get, find };
