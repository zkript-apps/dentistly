import express from "express";
import {
  addUser,
  deleteUser,
  getAllUser,
  getUser,
  updateUser,
} from "./default";
import { verifySignIn } from "./auth";

const router = express.Router();

router.get("/", getAllUser);
router.get("/:id", getUser);
router.post("/", addUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);
router.get("/auth/verify-sign-in", verifySignIn);

export default router;
