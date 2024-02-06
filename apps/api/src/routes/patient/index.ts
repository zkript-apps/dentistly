import express from "express";
import {
  addPatient,
  deletePatient,
  getAllPatients,
  getPatient,
  updatePatient,
} from "./default";
import { approvePatient } from "./custom";


const router = express.Router();
router.get("/", getAllPatients);
router.get("/:id", getPatient);
router.post("/", addPatient);
router.patch("/:id", updatePatient);
router.patch("/approve/:id", approvePatient);
router.delete("/:id", deletePatient);

export default router;
