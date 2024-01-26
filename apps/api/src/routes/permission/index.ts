import express from "express";
import {
  addPermission,
  deletePermission,
  getAllPermission,
  getPermission,
  updatePermission,
} from "./default";

const router = express.Router();
router.get("/", getAllPermission);
router.get("/:id", getPermission);
router.post("/", addPermission);
router.patch("/:id", updatePermission);
router.delete("/:id", deletePermission);

export default router;
