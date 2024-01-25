import express from "express";
import { addPlanOffers, deletePlanOffer, getAllOffers, getOffer, getOffersByTable, updatePlanOffer } from "./default";

const router = express.Router();
router.get("/", getAllOffers);
router.get("/table/:tableName", getOffersByTable);
router.get("/:id", getOffer);
router.post('/', addPlanOffers)
router.patch('/:id', updatePlanOffer)
router.delete('/:id', deletePlanOffer)
export default router;
