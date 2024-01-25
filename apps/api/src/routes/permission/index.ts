import express from "express";
import { getAllPermission, getPermission, updatePermission } from "./default";

const router = express.Router()
router.get('/', getAllPermission)
router.get('/:id', getPermission)
router.patch('/:id', updatePermission)

export default router