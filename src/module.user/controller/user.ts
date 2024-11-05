import { Request, Response } from "express";

const getUser = async (req: Request, res: Response) => {
  console.log("GET /user");
  res.status(200).send("GET /user");
};

export { getUser };
