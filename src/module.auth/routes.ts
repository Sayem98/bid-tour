import { Router } from "express";
import { login, signup } from "./controller";

const router: Router = Router();

router.post("/login", login);
router.post("/register", signup);

export { router };
