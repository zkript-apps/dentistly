import express from "express";
import {
  addCheckup,
  deleteCheckup,
  getAllCheckup,
  getCheckup,
  updateCheckup,
} from "./default";

const router = express.Router();
router.post("/", addCheckup);
router.get("/:id", getCheckup);
router.get("/", getAllCheckup);
router.patch("/:id", updateCheckup);
router.delete("/:id", deleteCheckup);

export default router;
