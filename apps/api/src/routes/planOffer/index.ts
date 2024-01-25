import express from "express";
import { getAllOffers, getOffer, getOffersByTable } from "./default";

const router = express.Router();
router.get("/", getAllOffers);
router.get("/table/:tableName", getOffersByTable);
router.get("/:id", getOffer);

export default router;
