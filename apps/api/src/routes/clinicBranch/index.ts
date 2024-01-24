import express from "express"
import { addBranch, deleteBranch, getAllBranches, getBranchClinic, getBranchesByClinic, updateBranch } from "./default"

const router = express.Router()
router.get('/', getAllBranches)
router.get('/clinic/:clinicId', getBranchesByClinic)
router.get('/:id', getBranchClinic)
router.post('/clinic/:clinicId', addBranch)
router.patch('/:id', updateBranch)
router.delete('/:id', deleteBranch)
export default router