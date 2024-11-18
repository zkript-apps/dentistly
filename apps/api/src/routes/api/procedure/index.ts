import express from "express";
import {
  addProcedure,
  deleteProcedure,
  getAllProcedure,
  getProcedure,
  updateProcedure,
} from "./default";

const router = express.Router();

router.post("/", addProcedure);
router.get("/:id", getProcedure);
router.get("/", getAllProcedure);
router.patch("/:id", updateProcedure);
router.delete("/:id", deleteProcedure);

export default router;
