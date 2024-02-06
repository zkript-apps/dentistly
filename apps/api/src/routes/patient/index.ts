import express from "express";
import {
  addPatient,
  deletePatient,
  getAllPatientByClinic,
  getAllPatients,
  getPatient,
  updatePatient,
} from "./default";
import { approvePatient } from "./custom";

const router = express.Router();
router.get("/", getAllPatients);
router.get("/:id", getPatient);
router.get("/clinic/:clinicId", getAllPatientByClinic);
router.post("/", addPatient);
router.patch("/:id", updatePatient);
router.patch("/approve/:id", approvePatient);
router.delete("/:id", deletePatient);

export default router;
