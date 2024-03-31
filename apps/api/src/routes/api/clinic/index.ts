import express from "express";
import {
  addClinic,
  deleteClinic,
  getAllClinic,
  getClinic,
  updateClinic,
} from "./default";

const router = express.Router();
router.post("/", addClinic);
router.get("/:id", getClinic);
router.get("/", getAllClinic);
router.patch("/:id", updateClinic);
router.delete("/:id", deleteClinic);

export default router;
