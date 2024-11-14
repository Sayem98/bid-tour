import express from "express";
import { router as userRoutes } from "./module.user/routes";

const router = express.Router();

router.use("/user", userRoutes);

export { router };
