import express from "express";
import {
  getAUser,
  getAllUsers,
  updateAUser,
  deleteAUser,
  createAUser,
} from "./controller";

const router = express.Router();

router.route("/").get(getAllUsers).post(createAUser);
router.route("/:id").get(getAUser).put(updateAUser).delete(deleteAUser);

export { router };
