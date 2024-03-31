import express from "express";
import {
  addOperation,
  deleteOperation,
  getAllOperations,
  getOperation,
  getOperationByClinicId,
  updateOperation,
} from "./default";

const router = express.Router();

router.post("/", addOperation);
router.get("/:id", getOperation);
router.get("/", getAllOperations);
router.patch("/:id", updateOperation);
router.delete("/:id", deleteOperation);
router.get("/:id/:clinicId", getOperationByClinicId);

export default router;
