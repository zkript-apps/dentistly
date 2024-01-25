import express from "express";
import { getAllPermission, getPermission } from "./default";

const router = express.Router()
router.get('/', getAllPermission)
router.get('/:id', getPermission)

export default router