import express from "express";
import {
  addPatient,
  deletePatient,
  getAllPatientByClinic,
  getAllPatients,
  getPatient,
  updatePatient,
} from "./default";

const router = express.Router();
router.get("/", getAllPatients);
router.get("/:id", getPatient);
router.get('/clinic/:clinicId', getAllPatientByClinic)
router.post("/", addPatient);
router.patch("/:id", updatePatient);
router.delete("/:id", deletePatient);

export default router;
