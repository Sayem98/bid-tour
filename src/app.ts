import express from "express";
import { getUser } from "./module.user/controller/user";
const app = express();

app.get("/", getUser);

export { app };
