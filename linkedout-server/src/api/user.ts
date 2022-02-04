import { Request, Response } from "express";
import { create, find, login, modify } from "../database/user";
import {
  checkForWeirdCharacters,
  handleErorr,
  validateEmail,
} from "../util/api";

async function createUser(request: Request, response: Response) {
  const { name, email, password } = request.body;

  if (checkForWeirdCharacters(name)) {
    handleErorr("invalid name", response);
    return;
  }
  if (!validateEmail(email)) {
    handleErorr("invalid email", response);
    return;
  }

  create({ name: name, email: email, password: password });
}

async function modifyUser(request: Request, response: Response) {
  const { token, data } = request.body;
  if (!token) {
    handleErorr("bad token", response);
  }

  modify(token, data);
}

async function loginUser(request: Request, response: Response) {
  const { email, password } = request.body;

  var token = await login(email, password);

  response.send(token);
}

async function getUser(request: Request, response: Response) {
  const { id } = request.body;
  var queryResult = await find({ _id: { $eq: id } });
  return queryResult;
}

async function findUser(request: Request, response: Response) {
  const { name } = request.body;
  var queryResult = await find({ name: { $text: name } });
  return queryResult;
}

export { createUser, modifyUser, loginUser, getUser, findUser };
