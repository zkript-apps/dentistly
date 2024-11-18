import express from "express";
import {
  addAppointment,
  deleteAppointment,
  getAllAppointments,
  getAppointment,
  updateAppointment,
  updateAppointmentStatus,
} from "./default";

const router = express.Router();
router.post("/", addAppointment);
router.get("/:id", getAppointment);
router.get("/", getAllAppointments);
router.patch("/:id", updateAppointment);
router.delete("/:id", deleteAppointment);
router.patch("/:id/status", updateAppointmentStatus);

export default router;
