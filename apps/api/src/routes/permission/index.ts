import express from "express";
import { getAllPermission } from "./default";

const router = express.Router()
router.get('/', getAllPermission)

export default router