import { Request, Response, NextFunction } from "express";
import { User } from "./models/User";
import { createUser } from "./services";

const createAUser = async (req: Request, res: Response) => {
  //create a new user
  const user = await createUser(req.body);
  res.send({
    message: "User created successfully",
    user,
  });
};

const getAUser = async (req: Request, res: Response) => {
  res.send("Hello from user controller");
};

const getAllUsers = async (req: Request, res: Response) => {
  res.send("Hello from user controller");
};

const updateAUser = async (req: Request, res: Response) => {
  res.send("Hello from user controller");
};

const deleteAUser = async (req: Request, res: Response) => {
  res.send("Hello from user controller");
};

export { getAUser, getAllUsers, updateAUser, deleteAUser, createAUser };
