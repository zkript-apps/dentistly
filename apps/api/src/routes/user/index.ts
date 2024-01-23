import express from "express";
import { addUser, deleteUser, getAllUser, getUser, updateUser } from "./default";

const router = express.Router()

router.get('/', getAllUser)
router.get('/:id', getUser)
router.post('/', addUser)
router.patch('/:id', updateUser)
router.delete('/:id', deleteUser)


export default router